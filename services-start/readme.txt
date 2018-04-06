Section 9

Services:

- Repository for some data.
- Include it as a class
- Uses dependency injection
- Use it to organize and share code across the app
- Lazily instantiated, which means that Angular only instantiates a service
when an application component depends on it

Using the service:

- Create the service as a class.
- import the service into the component that needs it (TS needs to know
where the service is coming from, NOT Angular!!)
- add a providers name into the @Component, instantiate it with an array
that contains the service that is to be used.
- Create a constructor in the class of the Component and place the Service
with a variable name inside of it.
- Use the service :-)
- See OneNote for detailed image (Module 8 - Services)

Multiple Instances of the Service:

Creating multiple instances of the service will cause overrides.

If you want one service to be shared from parent to children, instantiate the
service in the parent component and add the service into the constructors
of the children. Do NOT add the Service into the providers section of the
children as this will cause overriding.

Injectable:

When injecting a service into a class, you must import Injectable
from @angular/core

