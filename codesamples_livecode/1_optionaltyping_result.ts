var languages = [ { name: "TypeScript", ext: "ts"}
                , { name: "JavaScript", ext: "js"}
                , { name: "Java", ext: "java" }
                ]

interface Language {
  name: string
  ext: string
}

function findByName(name: string, elems: Language[]) {
  var elem: Language;
  elems.forEach(function(value, index) {
    if (value.name.toLowerCase() === name.toLowerCase())
      elem = value;
  })
  return elem;
}

document.body.textContent = JSON.stringify(findByName("typescript", languages))