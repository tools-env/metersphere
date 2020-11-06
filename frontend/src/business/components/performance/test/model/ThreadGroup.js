import {xml2json} from "xml-js";

let travel = function (elements, threadGroups) {
  if (!elements) {
    return;
  }
  for (let element of elements) {
    if (element.name === 'ThreadGroup') {
      threadGroups.push(element);
    }
    travel(element.elements, threadGroups)
  }
}

export function findThreadGroup(jmxContent) {
  let jmxJson = JSON.parse(xml2json(jmxContent));
  let threadGroups = [];
  travel(jmxJson.elements, threadGroups);
  return threadGroups;
}
