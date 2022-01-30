package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.repositories.CommentsRepo;
//import org.wecancodeit.serverside.models.BodyOfWater;
//import org.wecancodeit.serverside.repositories.BodyOfWaterRepo;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

        @Resource
        private CommentsRepo commentsRepo;

        @Override
        public void run(String... args) throws Exception {


        }



}
