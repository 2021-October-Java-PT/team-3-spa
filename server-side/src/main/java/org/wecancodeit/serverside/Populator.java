package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.BoredResources;
import org.wecancodeit.serverside.repositories.BoredResourcesRepository;
import org.wecancodeit.serverside.repositories.NoaaResourcesRepository;
import org.wecancodeit.serverside.models.NoaaResources;



import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

        @Resource
        private BoredResourcesRepository boredRepo;

        @Resource
        private NoaaResourcesRepository noaaResourceRepo;
       

        @Override
        public void run(String... args) throws Exception {

                BoredResources wordle = new BoredResources("Wordle","https://www.powerlanguage.co.uk/wordle/");
                BoredResources cookieClicker = new BoredResources("Cookie Clicker","https://orteil.dashnet.org/cookieclicker/");
                BoredResources fortnite = new BoredResources("Fortnite","https://www.epicgames.com/fortnite/en-US/home");
                BoredResources bigFarm = new BoredResources("Big Farm","https://bigfarm.goodgamestudios.com/");
                BoredResources raid = new BoredResources("Raid: Shadow Legends","https://raidshadowlegends.com/");
                BoredResources base = new BoredResources("Base Attack Force","https://www.baseattackforce.com/");
                BoredResources war = new BoredResources("War Thunder","https://warthunder.com/en");
                BoredResources rail = new BoredResources("Rail Nation","https://www.railnation.us/");

                boredRepo.save(wordle);
                boredRepo.save(cookieClicker);
                boredRepo.save(fortnite);
                boredRepo.save(bigFarm);
                boredRepo.save(raid);
                boredRepo.save(base);
                boredRepo.save(war);
                boredRepo.save(rail);


                NoaaResources rainbowFish = new NoaaResources("The Rainbow Fish", "Marcus Pfister","https://www.amazon.com/Rainbow-Fish-Marcus-Pfister/dp/1558580093/ref=zg_bs_2823_2/133-6260264-4696624?pd_rd_i=1558580093&psc=1");
                NoaaResources bookAboutSharks = new NoaaResources("My little Golden Book About Sharks","Bonnie Bader","https://www.amazon.com/Little-Golden-Book-About-Sharks/dp/1101930926/ref=zg_bs_2823_7/133-6260264-4696624?pd_rd_i=1101930926&psc=1");
                NoaaResources sweetDreams = new NoaaResources("Sweet Dreams, Pout-Pout Fish (A Pout-Pout Fish Mini Adventure)","Deborah Diesen","https://www.amazon.com/Sweet-Dreams-Pout-Pout-Fish-Adventure/dp/0374380104/ref=zg_bs_2823_11/133-6260264-4696624?pd_rd_i=0374380104&psc=1");
                NoaaResources seaCreatures = new NoaaResources("Sea Creatures: A Coloring Book For Kids","Mew Kids","https://www.amazon.com/Sea-Creatures-Coloring-Book-Kids/dp/1726779610/ref=zg_bs_2823_17/133-6260264-4696624?pd_rd_i=1726779610&psc=1");
                NoaaResources sharks = new NoaaResources("National Geographic Reader: Sharks!","Anne Schreiber","https://www.amazon.com/National-Geographic-Readers-Sharks-Science/dp/142630286X/ref=zg_bs_2823_21/133-6260264-4696624?pd_rd_i=142630286X&psc=1");
                NoaaResources outOfWater = new NoaaResources("A Fish Out Of Water","Philip D. Eastman","https://www.amazon.com/Fish-Out-Water-Beginner-Books/dp/0394800230/ref=zg_bs_2823_29/133-6260264-4696624?pd_rd_i=0394800230&psc=1");

                noaaResourceRepo.save(rainbowFish);
                noaaResourceRepo.save(bookAboutSharks);
                noaaResourceRepo.save(sweetDreams);
                noaaResourceRepo.save(seaCreatures);
                noaaResourceRepo.save(sharks);
                noaaResourceRepo.save(outOfWater);


        }



                


        }



