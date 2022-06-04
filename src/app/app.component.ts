import { Component, OnInit } from '@angular/core';

interface Snippet$v1 {
	code: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	/** List of snippets */
	snippets: Snippet$v1[] = [];

	/** Whether snippet has been copied or not */
	copied: boolean = false;

	/** On init lifecycle hook */
	ngOnInit() {
		this.snippets = [
			{
				code: 'Code goes here'
			} as Snippet$v1,
			{
				code: 'Code goes here'
			} as Snippet$v1,
			{
				code: 'Code goes here'
			} as Snippet$v1,
			{
				code: 'Code goes here'
			} as Snippet$v1,
			{
				code: 'Code goes here'
			} as Snippet$v1,
			{
				code: 'Code goes here'
			} as Snippet$v1,
			{
				code: 'Code goes here'
			} as Snippet$v1,
			{
				code: 'Code goes here'
			} as Snippet$v1,
			{
				code: 'Code goes here'
			} as Snippet$v1,
			{
				code: 'Code goes here'
			} as Snippet$v1
		]
	}

	/** Copy snippet to clipboard */
	copy(snippet: Snippet$v1) {
		// TODO: add copy logic
		this.copied = true;
	}
}
