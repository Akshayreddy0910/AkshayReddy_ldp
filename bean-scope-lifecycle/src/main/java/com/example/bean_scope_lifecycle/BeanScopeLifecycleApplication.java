package com.example.bean_scope_lifecycle;

import com.example.bean_scope_lifecycle.prototype.PrototypeBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class BeanScopeLifecycleApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext context =
				SpringApplication.run(BeanScopeLifecycleApplication.class, args);

		PrototypeBean bean1 = context.getBean(PrototypeBean.class);
		PrototypeBean bean2 = context.getBean(PrototypeBean.class);

		System.out.println(
				"Are both prototype beans the same object? " + (bean1 == bean2)
		);
	}
}