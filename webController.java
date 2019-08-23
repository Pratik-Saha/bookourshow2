package com.mytectra.learning.bookourshow.webmvc;

import javax.swing.Renderer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.mytectra.learning.bookourshow.entity.Movie;
import com.mytectra.learning.bookourshow.service.MovieService;
import com.mytectra.learning.bookourshow.web.exception.MovieNotFoundException;

@Controller
public class WebController {
	
	@Autowired
	private MovieService service;
	
	@RequestMapping("/home")
	public ModelAndView listMovies() {
		//Movie movie = new Movie();
		ModelAndView modelAndView = new ModelAndView("movieHome");
		//modelAndView.addObject("movie",movie);
		modelAndView.addObject("movies", service.listMovie());
		return modelAndView;
	}
	
	/*
	 * @RequestMapping("/home2") public ModelAndView home2() { ModelAndView mvm =
	 * new ModelAndView("index"); mvm.addObject("name", "Jayaram"); return mvm; }
	 */
	
	@RequestMapping("/movie_load")
	public ModelAndView loadMovie(@Validated @ModelAttribute Movie movie,BindingResult result) {
		
		ModelAndView modelAndView = new ModelAndView();
		try {
			if(! result.hasErrors()) {
				service.loadMovie(movie);
				modelAndView.setViewName("forward:/home");
				modelAndView.addObject("message1", "movie added successfully!!");
			}
			else {
				return new ModelAndView("forward:/home");
			}
			
		} catch (Exception e) {
			modelAndView.setViewName("forward:/home");
			modelAndView.addObject("message2", "ERROR!! Movie with same id already exists");
			return modelAndView;
		}
	
		return modelAndView;
		
	}
	
	@RequestMapping("/movie_form")
	public ModelAndView getForm() {
		Movie movie = new Movie();
		ModelAndView modelAndView = new ModelAndView("forward:/home");
		modelAndView.addObject("movie",movie);
		return modelAndView;
	}
	
	@RequestMapping("/search_movie")
	public ModelAndView getSearchMovieForm() {
		ModelAndView modelAndView = new ModelAndView("searchMovie");
		return modelAndView;
	}
	
	@RequestMapping("/get_details")
	public ModelAndView getMovieDetails(@RequestParam("movie_id") int id) {
		
		ModelAndView mvm = new ModelAndView("movie");
		Movie movie = null;
		try {
			movie = service.getMovieById(id);
		} catch (MovieNotFoundException e) {
			
			return new  ModelAndView("error");
			
		}
		mvm.addObject("movie",movie);
		return mvm;
		
	}
	
	
 
}
