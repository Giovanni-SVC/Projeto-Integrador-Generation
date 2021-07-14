package com.projetoGama.configuration;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Response;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {
	@Bean
	public Docket api() { /*Define a package onde estão as classes do tipo @RestController, 
		para que o Swagger mapeie todas as classes e seus respectivos endpoints para montar a documentação do projeto.*/
		
		return new Docket(DocumentationType.SWAGGER_2)
	        .select()
			.apis(RequestHandlerSelectors
			.basePackage("com.projetoGama.controller"))
			.paths(PathSelectors.any())
			.build()
			.apiInfo(metadata())
			.useDefaultResponseMessages(false)
			.globalResponses(HttpMethod.GET, responseMessageForGET());
			
	}

	public static ApiInfo metadata() {

		return new ApiInfoBuilder()
			.title("Gama")//Define o titulo da sua aplicação que será exibida na documentação.
			.description("Projeto API Spring - Gama")//Cria uma descrição para a sua aplicação
			.version("1.0.0")//Define a versão da sua aplicação.
			.license("Apache License Version 2.0")//Define o tipo de licença da sua aplicação
			.licenseUrl("http://localhost:8091/swagger-ui/")//Informa o link de acesso da licença da sua aplicação (geralmente se aplica a licença no Github).
			.contact(contact())
			.build(); //Define os dados para contato com o desenvolvedor inseridos no método contact().
	}
	
	private static Contact contact() { //Define os dados dos Desenvolvedores (Nome, Website e o E-mail).

		return new Contact("Felipe Januário, Giovanni Cerqueira, Gustavo Simões e Jonathan Silva, ", "https://github.com/Giovanni-SVC/Projeto-Integrador-Generation", "jonathansilvadevjpldv@gmail.com");
	}

	private static List<Response> responseMessageForGET() { /*Define as mensagens personalizadas para os códigos de Resposta do protocolo http (httpResponse). 
	Cada linha é referente a um Status Code.*/

		return new ArrayList<Response>() {

			private static final long serialVersionUID = 1L;

			{
				add(new ResponseBuilder().code("200").description("Sucesso!").build());
				add(new ResponseBuilder().code("201").description("Objeto Criado!").build());
				add(new ResponseBuilder().code("401").description("Não Autorizado!").build());
				add(new ResponseBuilder().code("403").description("Proibido!").build());
				add(new ResponseBuilder().code("404").description("Não Encontrado!").build());
				add(new ResponseBuilder().code("500").description("Erro!").build());
			}
		};

	}

}