const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

class JUnitDeserialiser {
    deserialise = (xml) => {
        const options = {
            ignoreAttributes : false
        };
        let p = new XMLParser(options);
        return p.parse(xml);
    }
}

module.exports = JUnitDeserialiser;