// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
function getMailToLink()
{ 
    coded = "KQs@k6Z7Aq.xnA";
    key = "Cp37SsYPXw8Og0tBTUrvVElNbWfJRe15iumGZzqD6oMQhdjcA4Ia2y9nFHKLkx";
    shift=coded.length;
    link="";

    for (i=0; i<coded.length; i++) {
        if (key.indexOf(coded.charAt(i))==-1) {
            ltr = coded.charAt(i)
            link += (ltr)
        }
        else {     
            ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
            link += (key.charAt(ltr))
        }
    }

    return "<a href='mailto:"+link+"'>email me</a>";
};
