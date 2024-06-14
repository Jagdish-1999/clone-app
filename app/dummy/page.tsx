"use client";
import React, { CSSProperties, useState } from "react";
import "./styles.css";

export default function Home() {
	const [inputValue, setInputValue] = useState("");

	const data = [
		"Hyderabad",
		"Delhi",
		"Dubai",
		"Noida",
		"Mumbai",
		"Benguluru",
		"Gurgaon",
		"Jaipur",
		"Goa",
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<div id="container">
			<input
				id="input"
				type="text"
				value={inputValue}
				onChange={handleChange}
			/>
			<div id="list_container">
				{data.map((value: string, idx: number) => {
					if (
						value.toLocaleLowerCase().startsWith(inputValue.toLocaleLowerCase())
					) {
						let searched = "";
						let rest = "";
						const result = [];
						const dummy = inputValue;

						if (inputValue) {
							searched = dummy.slice(0, inputValue.length);
							rest = value.slice(inputValue.length);

							const arr = data.find((each: string) =>
								each.startsWith(searched)
							);

							const element = (
								<div
									id="element"
									style={{ "--i": `${idx * 10}ms` } as CSSProperties}>
									<span id="searched">{searched.toLocaleLowerCase()}</span>
									<span id="rest">{rest.toLocaleLowerCase()}</span>
								</div>
							);

							result.push(element);
						}

						return (
							<div key={value} id="list_item">
								{inputValue ? (
									<>{result}</>
								) : (
									<div
										key={value}
										id="list_item_1"
										style={{ "--i": `${idx * 10}ms` } as CSSProperties}>
										{value.toLocaleLowerCase()}
									</div>
								)}
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}
