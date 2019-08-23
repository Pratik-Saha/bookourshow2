<%@ taglib uri = "http://www.springframework.org/tags/form" prefix = "form" %>
<%@ taglib uri = "http://java.sun.com/jstl/core_rt" prefix = "c" %>
<html>
	<c:if test="${not empty movie }">
	<h1>Movie Form</h1>
	<h3><font color="green" >${message1}</font></h3>
	<h3><font color="red" >${message2}</font></h3>
	
	<form:form action ="/movie_load" method ="POST" modelAttribute="movie" >
	Id - &emsp;&emsp; <form:input path="id"/> <font color="RED" ><form:errors path="id"/></font> <br>
	Movie Name - <form:input path="movieName"/> <font color="RED" ><form:errors path="movieName"/></font> <br>
	Actor Name - <form:input path="actorName"/> <font color="RED" ><form:errors path="actorName"/></font> <br>
	Director Name - <form:input path="directorName"/> <font color="RED" ><form:errors path="directorName"/></font><br>
	IMDB - &emsp;&emsp; <form:input path="imdb"/> <font color="RED" ><form:errors path="imdb"/></font> <br>
	Release Date - <form:input path="releaseDate"/> <font color="RED" ><form:errors path="releaseDate"/></font> <br><br>
	
	<input type ="submit" value ="submit"/> &emsp;&emsp; <input type ="reset" value ="Reset" />  	
	
	</form:form>
	</c:if>
	
	
	<a href="/movie_form"><input type ="button" value ="Add movie"></a> &emsp;&emsp;
	<a href="/search_movie"><input type ="button" value ="Search Movie"></a>
	<br><br>
	
	<c:if test="${not empty movies }">
	<jsp:include page="movies.jsp"></jsp:include>
	</c:if>
	
</html>
