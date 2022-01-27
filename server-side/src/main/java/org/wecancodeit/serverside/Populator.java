package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.repositories.BodyOfWaterRepo;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private BodyOfWaterRepo bodyOfWaterRepo;


    @Override
    public void run(String... args) throws Exception {


        BodyOfWater atlanticOcean = new BodyOfWater("Atlantic Ocean","The Atlantic Ocean is the second-largest of the world's five oceans, with an area of about 106,460,000 km². It covers approximately 20% of Earth's surface and about 29% of its water surface area.","https://api.mapbox.com/styles/v1/mbarkley23/ckyxkhxn4000y14qvx2v4fwuu.html?title=view&access_token=pk.eyJ1IjoibWJhcmtsZXkyMyIsImEiOiJja3kyYzIyY2Qwamt4MzN0NWt5N2lhdWswIn0.rxZNbrc8-0SzQlOABDaubQ&zoomwheel=true&fresh=true#2.7/38.07/-34.02");
        BodyOfWater indianOcean = new BodyOfWater("IndianOcean","The Indian Ocean has been known by its present name since at least 1515 when the Latin form Oceanus Orientalis Indicus (\"Indian Eastern Ocean\") is attested, named for India, which projects into it. It was earlier known as the Eastern Ocean, a term that was still in use during the mid-18th century (see map), as opposed to the Western Ocean (Atlantic) before the Pacific was surmised.","https://api.mapbox.com/styles/v1/mbarkley23/ckyxkhxn4000y14qvx2v4fwuu.html?title=view&access_token=pk.eyJ1IjoibWJhcmtsZXkyMyIsImEiOiJja3kyYzIyY2Qwamt4MzN0NWt5N2lhdWswIn0.rxZNbrc8-0SzQlOABDaubQ&zoomwheel=true&fresh=true#2.97/-21.11/81.74");
        BodyOfWater pacificOcean = new BodyOfWater("Pacific Ocean","The Pacific Ocean is the largest and deepest of Earth's five oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and is bounded by the continents of Asia and Australia in the west and the Americas in the east.","https://api.mapbox.com/styles/v1/mbarkley23/ckyxkhxn4000y14qvx2v4fwuu.html?title=view&access_token=pk.eyJ1IjoibWJhcmtsZXkyMyIsImEiOiJja3kyYzIyY2Qwamt4MzN0NWt5N2lhdWswIn0.rxZNbrc8-0SzQlOABDaubQ&zoomwheel=true&fresh=true#2.56/-38.44/-142.8");
        BodyOfWater articOcean = new BodyOfWater("Artic Ocean","The Arctic Ocean is the smallest and shallowest of the world's five major oceans. It spans an area of approximately 14,060,000 km² and is also known as the coldest of all the oceans.","https://api.mapbox.com/styles/v1/mbarkley23/ckyxkhxn4000y14qvx2v4fwuu.html?title=view&access_token=pk.eyJ1IjoibWJhcmtsZXkyMyIsImEiOiJja3kyYzIyY2Qwamt4MzN0NWt5N2lhdWswIn0.rxZNbrc8-0SzQlOABDaubQ&zoomwheel=true&fresh=true#3.94/82.54/66.22");
        bodyOfWaterRepo.save(atlanticOcean);
        bodyOfWaterRepo.save(indianOcean);
        bodyOfWaterRepo.save(pacificOcean);
        bodyOfWaterRepo.save(articOcean);





    }
}
