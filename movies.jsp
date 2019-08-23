<%@ taglib uri = "http://java.sun.com/jstl/core_rt" prefix = "c" %>
<html>
	<h3>List Of Movies</h3>
	<table border="5" >
		<thead>
		<td>Id</td>
		<td>Movie Name</td>
		<td>Actor Name</td>
		<td>Director Name</td>
		<td>IMDB</td>
		<td>Release Date</td>
		</thead>
		<c:forEach items="${movies}" var ="m">
			<tr>
				<td>${m.id}</td>
				<td>${m.movieName}</td>
				<td>${m.actorName}</td>
				<td>${m.directorName}</td>
				<td>${m.imdb}</td>
				<td>${m.releaseDate}</td>
			</tr>
		</c:forEach>
	</table>
</html>
