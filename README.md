## SpringBootSwitchLanguage
### 1. Content
A simple Java Spring Boot project contains language switch.
### 2. Settings
a. Put your translations into property files: messages.properties and messages_en.properties.
b. If you would like define a new language set right locale code in SpringConfiguration.java
```java
  @Bean
  public LocaleResolver localeResolver() {
    Locale locale = new Locale("pl", "PL");
    SessionLocaleResolver slr = new SessionLocaleResolver();
    slr.setDefaultLocale(locale);
    return slr;
  }
  ```
  and add a new properties file: messages_[your_language_code].properties
  ### 3. Screenshots
  ![Image1](http://kwascow.civ.pl/public_html/file_repository/springBootSwitchLanguage1 "Screen 1")
  ![Image1](http://kwascow.civ.pl/public_html/file_repository/springBootSwitchLanguage2 "Screen 2")
