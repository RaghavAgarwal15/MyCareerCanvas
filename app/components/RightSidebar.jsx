"use client";
import { useContext, useRef, useState, useCallback, useEffect } from "react";
import { Label } from "./ui/label"
import { X } from "lucide-react";

import { Badge } from ".//ui/badge";
import {
	Command,
	CommandGroup,
	CommandItem,
} from "./ui/command";
import { Command as CommandPrimitive } from "cmdk";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Button } from "./ui/button";
import FilterContext from "../context/filterContext";

const SUBJECTS = [
	{
		value: "English",
		label: "English",
	},
	{
		value: "Hindi",
		label: "Hindi",
	},
	{
		value: "Science",
		label: "Science",
	},
	{
		value: "Social Science",
		label: "Social Science",
	},
	{
		value: "Physics",
		label: "Physics",
	},
	{
		value: "Chemistry",
		label: "Chemistry",
	},
	{
		value: "Mathematics",
		label: "Mathematics",
	},
	{
		value: "Biology",
		label: "Biology",
	},
	{
		value: "Computer Science",
		label: "Computer Science",
	},
	{
		value: "Accounts",
		label: "Accounts",
	},
	{
		value: "Business Studies",
		label: "Business Studies",
	},
	{
		value: "History",
		label: "History",
	},
	{
		value: "Geography",
		label: "Geography",
	},
	{
		value: "Political Science",
		label: "Political Science",
	},
	{
		value: "Economics",
		label: "Economics",
	},
	{
		value: "Philosophy",
		label: "Philosophy",
	},
	{
		value: "Sociology",
		label: "Sociology",
	},
	{
		value: "Psychology",
		label: "Psychology",
	},
	{
		value: "Physical Education",
		label: "Physical Education",
	},
	{
		value: "Home Science",
		label: "Home Science",
	},
	{
		value: "Dance",
		label: "Dance",
	},
	{
		value: "Art & Craft",
		label: "Art & Craft",
	},
	{
		value: "Music",
		label: "Music",
	}
]

const RightSidebar = () => {
	const inputRef = useRef(null);
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const context = useContext(FilterContext)
	const { applyFilters } = context;
	const [sector, setSector] = useState(2)
	const [time, setTime] = useState(3)
	const [mode, setMode] = useState(3)

	const [filters, setFilters] = useState({
		Sector: 2,
		Subjects: [],
		Time_Devotion: 3,
		Work_Mode: 3
	});

	const handleClick = (e) => {
		setFilters({
			Sector: sector, Work_Mode: mode, Time_Devotion: time, Subjects: selected
		})
		toast.success('Filters Applied')
	}

	useEffect(() => {
		applyFilters(filters)
	}, [filters])

	const handleUnselect = useCallback((framework) => {
		setSelected(prev => prev.filter(s => s.value !== framework.value));
	}, []);

	const handleKeyDown = useCallback((e) => {
		const input = inputRef.current
		if (input) {
			if (e.key === "Delete" || e.key === "Backspace") {
				if (input.value === "") {
					setSelected(prev => {
						const newSelected = [...prev];
						newSelected.pop();
						return newSelected;
					})
				}
			}
			if (e.key === "Escape") {
				input.blur();
			}
		}
	}, []);

	const selectables = SUBJECTS.filter(framework => !selected.includes(framework));

	return (
		<div className=''>
			<div><Toaster /></div>
			<aside className="w-full p-6 sm:w-72 dark:bg-gray-900 dark:text-gray-100">
				<nav className="space-y-8 text-sm">
					<div className="space-y-2">
						<h2 className=" font-semibold text-lg uppercase dark:text-gray-400">Filters</h2>
						<br />
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="Sector">Sector</Label>

							<select className="border-2 py-2 rounded-md" id="Sector" name="Sector"
								onChange={(e) => setSector(e.target.value)}>
								<option value={2}>Any</option>
								<option value={0}>Government</option>
								<option value={1}>Private</option>
							</select>

							<Label htmlFor="school_subjects" className="mt-4">School Subjects</Label>
							<Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
								<div
									className="group bg-white border-2 border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
								>
									<div className="flex gap-1 flex-wrap ">
										{selected.map((framework) => {
											return (
												<Badge key={framework.value} variant="secondary">
													{framework.label}
													<button
														className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
														onKeyDown={(e) => {
															if (e.key === "Enter") {
																handleUnselect(framework);
															}
														}}
														onMouseDown={(e) => {
															e.preventDefault();
															e.stopPropagation();
														}}
														onClick={() => { handleUnselect(framework) }}
													>
														<X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
													</button>
												</Badge>
											)
										})}

										<CommandPrimitive.Input
											ref={inputRef}
											value={inputValue}
											onValueChange={setInputValue}
											onBlur={() => setOpen(false)}
											onFocus={() => setOpen(true)}
											placeholder="Select Subjects"
											className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
										/>
									</div>
								</div>
								<div className="relative mt-2">
									{open && selectables.length > 0 ?
										<div className="h-72 absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
											<CommandGroup className="h-full overflow-auto">
												{selectables.map((framework) => {
													return (
														<CommandItem
															key={framework.value}
															onMouseDown={(e) => {
																e.preventDefault();
																e.stopPropagation();
															}}
															onSelect={(value) => {
																setInputValue("")
																setSelected(prev => [...prev, framework])
															}}
															className={"cursor-pointer"}
														>
															{framework.label}
														</CommandItem>
													);
												})}
											</CommandGroup>
										</div>
										: null}
								</div>
							</Command >


							<Label htmlFor="Time_Devotion" className="mt-4">Time Devotion</Label>
							<div ></div>
							<select className="border-2 py-2 rounded-md" id="Time_Devotion" name="Time_Devotion" onChange={(e) => (setTime(e.target.value))}>
								<option value={3}>Any</option>
								<option value={0}>Full Time</option>
								<option value={1}>Part Time</option>
							</select>

							<Label htmlFor="Work_Mode" className="mt-4">Work Mode</Label>
							<select className="border-2 py-2 rounded-md" id="Work_Mode" name="Work_Mode" onChange={(e) => (setMode(e.target.value))}>
								<option value={3}>Any</option>
								<option value={0}>On Site</option>
								<option value={1}>Remote</option>
								<option value={2}>Hybrid</option>
							</select>

						</div>
					</div>
					<Button className='w-full' id="btn" onClick={handleClick}>Apply</Button>
				</nav>
			</aside>
		</div>
	)
}

export default RightSidebar