package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.BoredResources;
import org.wecancodeit.serverside.repositories.BoredRepository;


import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

        @Resource
        private BoredRepository boredRepo;

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

                // bored


        }



}
