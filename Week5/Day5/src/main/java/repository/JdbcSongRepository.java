package repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import domain.Song;

// 7) implementation of repository using JdbcTemplate
@Repository
public class JdbcSongRepository implements SongRepository{

	private final SongMapper songsMapper = new SongMapper();

	private final JdbcTemplate jdbcTemplate;
	private final SimpleJdbcInsert insertSong;
	
	@Autowired
	public JdbcSongRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
		// @formatter:off
		this.insertSong = new SimpleJdbcInsert(jdbcTemplate)
				.withTableName("songs")
				.usingGeneratedKeyColumns("id");
		// @formatter:on
	}
	
	@Override
	public int count() {
		return jdbcTemplate.queryForObject("select count(*) from songs", Integer.class);
	}

	@Override
	public void save(Song song) {
		Map<String, Object> parameters = new HashMap<>(2);
		parameters.put("title", song.getTitle());
		parameters.put("artist", song.getArtist());
		parameters.put("album", song.getAlbum());
		parameters.put("year", song.getYear());
		Number newId = insertSong.executeAndReturnKey(parameters);
		
		song.setId(newId.intValue());
	}

	@Override
	public List<Song> findAll() {
		return jdbcTemplate.query("select * from songs", songsMapper);
	}

	@Override
	public Song findById(Integer id) {
		String sql = "select * from songs where id=?";
		return jdbcTemplate.queryForObject(sql, songsMapper, id); // queryForObject --> expects an object
	}

	@Override
	public Song findByTitleAndArtist(String title, String artist) {
		String sql = "select * from songs where lower(title) = ? and lower(artist) = ?";
		return jdbcTemplate.queryForObject(sql, songsMapper, title, artist);
	}

	@Override
	public List<Song> findAllContaining(String text){
		String sql = "select * from songs where lower(title) like lower(?)";
		return jdbcTemplate.query(sql, songsMapper, "%" + text + "%"); // query --> 
	}
	
	@Override
	public List<String> findAllArtists(){
		String sql = "select distinct lower(artist) from songs"; // distinct -->
		return jdbcTemplate.queryForList(sql, String.class); // queryForList --> expects a String
	}
	
	@Override
	public void deleteAll() {
		jdbcTemplate.update("delete from songs");
	}

	@Override
	public void deleteById(Integer id) {
		jdbcTemplate.update("delete from songs where id=?", id);
	}

}
