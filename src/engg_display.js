import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Icon, InlineIcon } from '@iconify/react';
import plusSquareO from '@iconify-icons/fa/plus-square-o';
import minusSquareO from '@iconify-icons/fa/minus-square-o';






export default function engg_display(props) {
	let quest = props.quiz;
	var unit = "<p>" + quest.unit + "</p>";
	console.log("Quiz scenario" + quest.Scenario);

	return (

		<div className="quest-content">
			{
				quest.Scenario.map((desc) => {
					return (
						Object.entries(desc).map(([key, value]) => {
							console.log(key + ":+" + value);
							if (key === "content") {
								return <p>{value.toString()}</p>
							} else if (key === "image") {
								return <img src={"/images/Engg/" + value.toString()} />
							}
						}
						))
				})}

			<p><b>{quest.question}</b></p>
				<table className="engg-choice-table">
					<tr className="engg-choice-row">
						<td className="engg-choice-col" >
							<div className="input-cell">
								<div className="input-cell-value">
									<input id="{id}" className="input-value"></input>
								</div>
								<div className="input-cell-decimal"></div>
								<div className="input-cell-unit"><p>.</p></div>
							</div>
							<div className="input-buttons">
								<div className="input-button" >
									<Icon icon={plusSquareO} height="25%" width="25%" />
									<Icon icon={minusSquareO} height="25%" width="25%" />
								</div>

							</div>
						</td>
						<td className="engg-choice-col">
							<div className="input-cell">
								<div className="input-cell-value">
									<input id="{id}" className="input-value"></input>
								</div>
								<div className="input-cell-decimal"></div>
								{/* <div className="input-cell-unit"></div> */}
							</div>
							<div className="input-buttons">
								<div className="incr input-button">
									<Icon icon={plusSquareO} height="25%" width="25%" />
									<Icon icon={minusSquareO} height="25%" width="25%" />
								</div>
							</div>
						</td>
						<td className="engg-choice-col">
							<div className="input-cell">
								<div className="input-cell-value">
									<input id="{id}" className="input-value"></input>
								</div>
								<div className="input-cell-decimal"></div>
								<div className="input-cell-unit">{ReactHtmlParser(unit)}</div>
							</div>
							<div className="input-buttons">
								<div className="incr input-button">
									<Icon icon={plusSquareO} height="25%" width="25%" />
									<Icon icon={minusSquareO} height="25%" width="25%" />
								</div>
							</div>
						</td>
					</tr>
				</table>

			{/* ); */}

		</div>
	);
}