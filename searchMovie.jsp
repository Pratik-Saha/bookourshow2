<%@ taglib uri = "http://www.springframework.org/tags/form" prefix = "form" %>
<html>
	<h1>Search Movie page</h1>
	<form:form action ="/get_details" method ="POST" >
	Movie id - <input type ="text" name ="movie_id" id = "movie_id" /> <br>
	
	<input type ="submit" value ="submit"/>	
	
	</form:form>
</html>
