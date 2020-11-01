import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

function displayFillBlanksQuest(props) {
    const questContent = props.question;
    const questId = props.indexId;
    const pattern = /(\*)(\w+)(\s*)(\w+)(\*)/g;
    const test = questContent.replace(pattern, "<input type=text name=\"" + questId + "\" class=blanks></input>");
    const ansHtml = questContent.replace(/(\*)/g, "");
    //const ansHtml = questContent.replace(/[\*^\*]/g, "<i>");

    console.log("a;; odd replace "+ansHtml);

     const matchedVar = questContent.match(pattern);
    // console.log("Matchded :"+matchedVar);
    // let eeee = matchedVar.replace(/(\*)/g, "");
    // console.log("Relace matched "+eeee);
    // let ansTemp = questContent.replace(matchedVar,"<span>");
    // console.log("adfasfd :"+ansTemp);

    return (
        <div>
        <div className="fill-identification">
            {ReactHtmlParser(test)}
        </div>

        <div className="fill-identification answer-identification" id={"ans" + questId}>
            <h4>Answer</h4>
            {ReactHtmlParser(ansHtml)}
        </div>
        </div>
    );
}

export default displayFillBlanksQuest;
