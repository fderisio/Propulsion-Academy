package repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import domain.Song;

// 3) creates the movie map
public class SongMapper implements RowMapper<Song> {

	@Override
	public Song mapRow(ResultSet rs, int rowNum) throws SQLException {
		return new Song(rs.getString("title"), rs.getString("artist"), rs.getString("album"), rs.getInt("year"));
	}

}
