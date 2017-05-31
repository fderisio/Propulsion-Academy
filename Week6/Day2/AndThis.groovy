// JSON example
@RestController
class AndThis {

    @RequestMapping("/")
    def home() {
        [hello: "world"]
    }
}