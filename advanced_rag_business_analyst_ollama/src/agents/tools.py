import ast, operator
from src.ingestion.document_loader import load_url

def search_web(query, max_results=5):
    try:
        from ddgs import DDGS
        return list(DDGS().text(query, max_results=max_results))
    except Exception as e:
        return [{"error": f"Web search unavailable: {e}"}]

def fetch_webpage(url):
    return load_url(url)

_OPS = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul,
        ast.Div: operator.truediv, ast.Pow: operator.pow, ast.Mod: operator.mod,
        ast.USub: operator.neg, ast.UAdd: operator.pos}

def _eval(node):
    if isinstance(node, ast.Expression): return _eval(node.body)
    if isinstance(node, ast.Constant) and isinstance(node.value, (int,float)): return node.value
    if isinstance(node, ast.BinOp) and type(node.op) in _OPS: return _OPS[type(node.op)](_eval(node.left), _eval(node.right))
    if isinstance(node, ast.UnaryOp) and type(node.op) in _OPS: return _OPS[type(node.op)](_eval(node.operand))
    raise ValueError("Use only numbers, parentheses and basic arithmetic operators.")

def calculate(expression):
    return _eval(ast.parse(expression, mode="eval"))
