<%@ taglib uri = "http://java.sun.com/jstl/core_rt" prefix = "c" %>
<%-- <h1>Movie Details</h1>
Movie Name - ${movie.movieName} <br>
Actor Name - ${movie.actorName} <br>
Director Name - ${movie.directorName} <br>
Movie imdb - ${movie.imdb} <br>
Movie releaseDate - ${movie.releaseDate} <br> --%>

<html>
	<h3>Movies Details</h3>
	<table border="5" >
		<thead>
		<td>Id</td>
		<td>Movie Name</td>
		<td>Actor Name</td>
		<td>Director Name</td>
		<td>IMDB</td>
		<td>Release Date</td>
		</thead>
		<tr>
				<td>${movie.id}</td>
				<td>${movie.movieName}</td>
				<td>${movie.actorName}</td>
				<td>${movie.directorName}</td>
				<td>${movie.imdb}</td>
				<td>${movie.releaseDate}</td>
		</tr>
	</table>
</html>
