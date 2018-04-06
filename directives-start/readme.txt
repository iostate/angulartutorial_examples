
Module 7

Only one structural directive allowed on an element. 

Structural directives are represented by the asterisk (*).

See image attribute_vs_structural for differences between attribute
and structural directives.

Showing elements with a simple boolean switch, e.g. (click)="onlyEven =
!onlyEven"

Difference between ngClass and ngStyle: 

ngStyle interpolates javascipt object into style attribute, not CSS class.

ngClass translates your object into class attribute.

[ngClass] - Set a CSS style if a condition is met, e.g. 
	[ngClass]="{odd: odd % 2 == 0}

[ngStyle] - Set a CSS style explicitly, no condition or with condition. 
	[ngStyle]="{backgroundColor: 'red'}"
	[ngStyle]="{backgroundColor: odd % 2 !== 0 ? 'yellow' : 'transparent'}"

Directive Notes:

file extension is filename.directive.ts

- Must import Directive from @angular/core
- Use a selector when defining the Directive (use name: pair value), 
	camelCase notation
- To use, simply add the selector to a DOM element (<p basicHighlightDirective>)


When creating custom directive you should use Renderer2, ElementRef, and 
change the styling in ngOnInit(). See better-highlight.directive.ts 

HostBinding: 

import HostBinding
Directive usage: @HostBinding()

Combine HostBinding with HostListener in order to change style attributes.

Allows you to bind to any property of the element you're sitting on. 

Override HostBinding's by giving the values to the directive in the .html file. 

	<p appBetterHighlight
         [defaultColor]="'yellow'"
         [highlightColor]="'red'"></p>


NgOnInit:

Perform these statements when everything is initialized.


Property Binding:

There are two ways to do property binding directly on an element.

[defaultColor]="'yellow'"
defaultColor='yellow'

NgTemplate:

ng-template is not intially rendered. ng-templats are placed inside of 
an <ng-template> tag.

Place an [ngIf] without the start on the ng-template binding. 

 <div *ngIf="onlyEven">
          <li
            class="list-group-item"
            [ngClass]="{odd: odd % 2 == 0}"
            *ngFor="let even of evenNumbers">
            {{ even }}
          </li>
        </div>
        <ng-template>
          <div [ngIf]="onlyEven">
            <li
              class="list-group-item"
              [ngClass]="{odd: odd % 2 == 0}"
              *ngFor="let even of evenNumbers">
              {{ even }}
            </li>
          </div>
        </ng-template>

Notice the property binding of [ngIf] on the ng-template.div element. 
This is how *ngIf is working behind the scenes, by creating a template to
be used if the condition is met. 


Creating Own Structural Directive:

import TemplateRef, Input,  ViewContainerRef

create Input() with conditional
	- if (condition is not true)
		then create an embedded view on the view container reference
		using the template ref
	- else 
		clear the view controller reference

Ensure that the property name for (in the unless example, it is the Input()
directive that is "set" to unless) is the same as the name of the directive.
When you place * in front of the structural directive, it uses the name
of the directive, which is "appUnless". However, the property name was initially
set to simply "unless".


NgSwitch

Easily show different DOM elements using ngSwitch.

<div [ngSwitch]="value">
        <p *ngSwitchCase="5">Value is 5</p>
        <p *ngSwitchCase="10">Value is 10</p>
        <p *ngSwitchCase="100">Value is 100</p>
        <p *ngSwitchDefault>Value is Default</p>
      </div>

where value is a value in the component.ts file

- Great idea to identify a person's city using latitude and longitude,
and then using the Google API in order to identify the city. Use the city
to direct the user to the closest store (for SL project).
