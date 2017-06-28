package repository;

import static org.assertj.core.api.Assertions.assertThat;
import static java.util.stream.Collectors.toList;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import config.DataBaseConfig;
import config.RepositoryConfig;
import domain.Song;

@RunWith(SpringRunner.class) //@ = indentation
@ContextConfiguration(classes = {RepositoryConfig.class, DataBaseConfig.class})

public class SongRepositoryTests {

	@Autowired
	SongRepository repository;
	
	@Before
	public void clearSongsTable() {
		repository.deleteAll();
		assertNumSongs(0);
	}
	
	@Test
	public void save() {
		saveSong1();
		saveSong2();
		assertNumSongs(2);
	}
	
	@Test
	public void deleteAll(){
		saveSong1();
		saveSong2();
		assertNumSongs(2);
		repository.deleteAll();
		assertNumSongs(0);
	}
	
	@Test
	public void deleteById(){
		Song song1 = saveSong1();
		assertNumSongs(1);
		repository.deleteById(song1.getId());
		assertNumSongs(0);
	}
	
	@Test
	public void findAll() {
		Song song1 = saveSong1();
		Song song2 = saveSong2();
		assertNumSongs(2);
		System.out.println(song1);
		System.out.println(song2);

	}
	
	@Test
	public void findById(){
		saveSong1();
		assertNumSongs(1);
		Integer id = repository.findAll().get(0).getId();
		System.out.println(id);
		//  Song song = repository.findById(id); // Error!!
		/*assertThat(song.getTitle()).isEqualTo("I belive I can fly");
		assertThat(song.getArtist()).isEqualTo("Me First and the Gimmmes Gimmes");*/
	}
	
	@Test
	public void findByTitleAndArtist(){
		Song song = saveSong1();
		assertNumSongs(1);
		Song songTest = repository.findByTitleAndArtist(song.getTitle(), song.getArtist());
		assertThat(songTest.getAlbum()).isEqualTo("Take a break");
		//assertThat(songTest.getAlbum()).isEqualTo("Hurry Up, We Are Dreaming");
	}
	
	@Test
	public void findAllContaining(){
		save3Songs();
		// @formatter:off
		List<String> songTitles = repository.findAllContaining("Wait")
										 .stream()
										 .map(Song::getTitle)
										 .collect(toList());
		// @formatter:on
		assertThat(songTitles).containsExactlyInAnyOrder("Wait");		
	}
	
	@Test
	public void findAllArtists(){
		save3Songs();
		assertNumSongs(3);
		List<String> artists = repository.findAllArtists();
		assertThat(artists).containsExactlyInAnyOrder("Me First and the Gimmmes Gimmes", "M83", "Hudson and Troop");
	}
	
	

	/* ========== Extra methods for tests purposes =============== */
	
	private Song saveSong1() {
		Song song1 = new Song("I belive I can fly", "Me First and the Gimmmes Gimmes", "Take a break", 2003);
		repository.save(song1);
		return song1;
	}
	
	private Song saveSong2() {
		Song song2 = new Song("Wait", "M83", "Hurry Up, We Are Dreaming", 2011);
		repository.save(song2);
		return song2;
	}
	
	private void saveSong3() {
		repository.save(new Song("Against The Grain", "Hudson and Troop", "Open Up Slowly", 2011));
	}
	
	private void assertNumSongs(int i) {
		assertThat(repository.count()).isEqualTo(i);
	}

	private void save3Songs() {
		saveSong1();
		saveSong2();
		saveSong3();
		assertNumSongs(3);
	}
}
