from fastapi import APIRouter, Depends, HTTPException, Query, Response, status
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas

router = APIRouter(prefix="/students", tags=["Students"])

@router.post("/", response_model=schemas.StudentResponse, status_code=status.HTTP_201_CREATED)
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    db_student = models.Student(**student.model_dump())
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

@router.get("/", response_model=list[schemas.StudentResponse])
def read_students(
    skip: int = Query(default=0, ge=0, description="Number of records to skip"),
    limit: int = Query(default=10, ge=1, le=100, description="Maximum records to return"),
    search: str | None = Query(default=None, description="Optional name search"),
    db: Session = Depends(get_db)
):
    query = db.query(models.Student)
    if search:
        query = query.filter(models.Student.name.ilike(f"%{search}%"))
    return query.offset(skip).limit(limit).all()

@router.get("/{student_id}", response_model=schemas.StudentResponse)
def read_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

@router.put("/{student_id}", response_model=schemas.StudentResponse)
def replace_student(student_id: int, student_data: schemas.StudentCreate, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    for field, value in student_data.model_dump().items():
        setattr(student, field, value)
    db.commit()
    db.refresh(student)
    return student

@router.patch("/{student_id}", response_model=schemas.StudentResponse)
def update_student(student_id: int, student_data: schemas.StudentUpdate, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    updates = student_data.model_dump(exclude_unset=True)
    for field, value in updates.items():
        setattr(student, field, value)
    db.commit()
    db.refresh(student)
    return student

@router.delete("/{student_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    db.delete(student)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
