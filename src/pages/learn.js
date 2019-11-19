import React, {useReducer} from 'react';

import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';

import NumberList from './numbers';
import {Paginator,NextPrev} from './paginator';
import ClickList from './clicklist';







const LearnPage = () => {
	let {path} = useRouteMatch();

	// A reducer is a handy way of creating app data that is subscribed but somewhat custom
	// These will reset if you ever navigate away from the Learn pages
	let [fonts,setFont] = useReducer(
		(s,a) => ({...s,...a}),
		{first:'Arial',second:'serif'}
	);

	return (
		<Switch>
			<Route exact path={path}>
				<LearnIntroPage path={path}/>
			</Route>
			<Route exact path={`${path}/1`}>
				<Learn1Page path={path}/>
			</Route>
			<Route exact path={`${path}/2`}>
				<Learn2Page path={path} fonts={fonts} setFont={setFont} />
			</Route>
			<Route exact path={`${path}/3`}>
				<Learn3Page path={path} fonts={fonts} setFont={setFont} />
			</Route>
			<Route exact path={`${path}/4`}>
				<Learn4Page path={path} fonts={fonts} />
			</Route>
		</Switch>
	);
}









const LearnIntroPage = (props) => {
	return (<div class="card">
		<div class="pad">
			<h3>Learn about react stuff.</h3>
	
			<p>I should probably mention this page is only useful if you also look at the <a href="https://github.com/bronkula/react-test" target="_blank" rel="noopener noreferrer">github source repository</a>. The build will just seem silly by itself.</p>
		</div>


		<div class="pad line-up">
			<div className="flex-parent">
				<div className="flex-child"/>
				<Link className="btn" to={`${props.path}/1`}>Start!</Link>
			</div>
		</div>
	</div>);
}


const Learn1Page = ({path}) => {
	let arr = ['Red','Blue','Green','Cyan','Magenta','Yellow'];
	return (
		<div class="card">
			<div class="pad">
				<h3>Lists</h3>
	
				<hr/>
				<div>Inline List</div>
				{arr.map((o,i)=>
					<div key={i}>{o}</div>
				)}
	
				<hr/>
				<div>Component List</div>
				<NumberList data={arr} />
			</div>

			<div class="pad line-up">
				<NextPrev path={path} />
			</div>
		</div>
	);
}


const Learn2Page = ({path,fonts,setFont}) => {

	let fontlist = ['Arial', 'Arial Black', 'Tahoma', 'Verdana', 'sans-serif'];

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	const handleChange = (e) => {
		e.preventDefault();
		setFont({first:e.target.value});
	}

	const handleInput = (e) => {
		e.preventDefault();
		setFont({first:e.target.value});
	}

	return (
		<div class="card">
			<div class="pad">
				<h3>React forms</h3>
	
				<div>Choose a sans-serif font. Such as:
					<ClickList data={fontlist} callback={setFont} delimiter=", " />
				</div>
	
				<hr/>
				<div>This input will update all values instantly.</div>
				<input type="text" value={fonts.first} onChange={handleInput} />
	
				<hr/>
				<div>Don't try to change values <em>on submit</em> of <em>controlled inputs</em>.</div>
				<form onSubmit={handleSubmit}>
					<input type="text" value={fonts.first} onChange={handleChange} />
				</form>
	
				<hr/>
				<div style={{fontFamily:fonts.first}}>The chosen font is {fonts.first}.</div>
			</div>
			
			<div class="pad line-up">
				<NextPrev path={path} />
			</div>
		</div>
	);
}

const Learn3Page = ({path,fonts,setFont}) => {

	const handleChange = (e) => {
		setFont({second:e.target.value});
	}

	return (
		<div class="card">
			<div class="pad">
				<h3>Select Pulldowns</h3>
	
				<hr/>
				<select value={fonts.second} onChange={handleChange}>
					<option value="times new roman">Times New Roman</option>
					<option value="cambria">Cambria</option>
					<option value="georgia">Georgia</option>
					<option value="serif">Serif</option>
				</select>
	
				<div style={{fontFamily:fonts.second}}>The chosen font is {fonts.second}.</div>
			</div>
			
			<div class="pad line-up">
				<NextPrev path={path} />
			</div>
		</div>
	);
}

const Learn4Page = ({path,fonts}) => {

	return (
		<div class="card">
			<div class="pad">
				<h3>Now you can see your chosen fonts.</h3>
	
				<div style={{fontFamily:fonts.first}}>The first chosen font is {fonts.first}.</div>
				<div style={{fontFamily:fonts.second}}>The second chosen font is {fonts.second}.</div>
			</div>
			
			<div class="pad line-up">
				<Paginator prev={['Start Over',`${path}/2`]} next={['Finish','/']} />
			</div>
		</div>
	);
}

export default LearnPage;