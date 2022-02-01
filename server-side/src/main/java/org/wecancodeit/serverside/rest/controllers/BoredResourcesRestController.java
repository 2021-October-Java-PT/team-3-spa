import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class BoredRestController {

    @Resource
    private BoredRepository boredRepo;

    @GetMapping("/api/bored-resources")
    public Collection<BoredResources> getBoredResources(){
        return (Collection<BoredResources>) boredRepo.findAll();
    }

    @GetMapping("/api/bored-resources/{id}")
    public Optional<BoredResources> getBoredResources(@PathVariable Long id){
        return boredRepo.findById(id);
    }

    @PostMapping("/api/bored-resources/add-resource")
    public Collection<BoredResources> addBoredResource(@RequestBody String body, @PathVariable Long id) throws JSONException {
        JSONObject newBoredResource = new JSONObject(body);
        String name = newBoredResource.getString("name");
        String gamesToPlayUrl = newBoredResource.getString("gamesToPlayUrl");
        Optional<BoredResources> boredResourcesToAdopt = boredRepo.findByName(name);

        if (boredResourcesToAdopt.isEmpty()) {
            BoredResources boredResourcesToAdd = new BoredResources(name,gamesToPlayUrl);
            boredRepo.save(boredResourcesToAdd);
        }

        return (Collection<BoredResources>) boredRepo.findAll();
    }



}
