var languages = [ { name: "TypeScript", ext: "ts"}
                , { name: "JavaScript", ext: "js"}
                , { name: "Java", ext: "java" }
                ]

function findByName(name, elems) {
  var elem;
  elems.forEach(function(index, value) {
    if (value.name.toLower() === name.toLower())
      elem = value;
  })
  return elem;
}

