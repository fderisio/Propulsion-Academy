package repository;

import java.util.List;

import domain.Song;

// 2) repository: methods - as interface
public interface SongRepository {
	
	int count();
	
	void save(Song song);
	
	List<Song> findAll();
	
	Song findById(Integer id);
	
	Song findByTitleAndArtist(String title, String artist);
	
	List<Song> findAllContaining(String text);
	
	List<String> findAllArtists();
	
	void deleteAll();
	
	void deleteById(Integer id);
	
}
