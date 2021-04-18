## Bloodborne API
RESTful API providing a series of JSON endpoints as listed below. 

### Endpoints
- [/trick-weapons](https://bloodbornev1.herokuapp.com/api/trick-weapons)
- [/trick-weapons/:id](#)
- [/firearms](https://bloodbornev1.herokuapp.com/api/firearms)
- [/runes](https://bloodbornev1.herokuapp.com/api/runes)
- [/bosses](https://bloodbornev1.herokuapp.com/api/bosses)

### Example usage
```
async function fetchTrickWeapons() {
  const response = await fetch('https://bloodbornev1.herokuapp.com/api/trick-weapons');
  // do your thing...
}
```

### Disclaimer
This API was developed as a side project by a fan of the game and is in no way affiliated with From Software. The content this API serves was curated from multiple online sources including the [Fextralife](https://bloodborne.wiki.fextralife.com/Bloodborne+Wiki) and [IGN](https://www.ign.com/wikis/bloodborne/) wikis. 