---
title: "Home"
layout: layout.njk
---
<div class="columns">
  	<div class="left-column">
  		<div class="yellow-box box">
  			<div class="about-header">
  				<img src="../images/headshot.jpg" />
  				<p>Hi! I am a developer at <a href="https://www.fablevisionstudios.com" target="_blank">FableVision Studios</a>. I specialize in <b>web development</b> and <b>native app development.</b> I mainly use <b>TypeScript.</b> 
  				<br />
  				<br />
  				<a href="/about">More about me.</a></p>
  			</div>
  		</div>
	    <div class="box blue-box">
		  <h3>Recent Work</h3>
		  <div class="table-wrapper">
			<table>
				<thead>
				<tr>
					<th></th>
					<th>Title</th>
					<th>Role</th>
					<th>&lt;/&gt;</th>
					<th>Year</th>
				</tr>
				</thead>
				<tbody>
				{% for post in collections.portfolio %}
				<tr>
					<td width="11%">
					<img class="thumbnail" src="{{ post.data.thumbnail }}" alt="{{ post.data.title }} thumbnail" />
					</td>
					<td width="20%"><a href="{{ post.url }}">{{ post.data.title }}</a></td>
					<td width="26%">{{ post.data.role }}</td> <!-- Optional -->
					<td width="28%">{{ post.data.tech }}</td>
					<!-- <td><a href="{{ post.url }}">{{ post.url }}</a></td> -->
					<td>{{ post.data.shipped }}</td> <!-- Optional -->
				</tr>
				{% endfor %}
				</tbody>
			</table>
		  </div>
		</div> 
	</div>
	<div class="right-column">
		<div class="box pink-box">
			<h3>Links</h3>
			<ul>
				<li><a href="https://github.com/erikLaats" target="_blank">GitHub</a>
				<li><a href="https://www.linkedin.com/in/erik-laats/" target="_blank">LinkedIn</a>
				<li><a href="https://www.codewars.com/users/erika_bonchiko/" target="_blank">CodeWars</a>
				<li><a href="https://leetcode.com/u/erika_bonchiko/" target="_blank">LeetCode</a>
			</ul>
		</div>
		<div class="box violet-box">
	    	<h3>\<\/\></h3>
	    	<ul>
				<li>TypeScript</li>
				<li>React</li>
				<li>Craft CMS</li>
				<li>Unity</li>
				<li>C#</li>
				<li>HTML/CSS/JS</li>
				<li>Django</li>
				<li>Lua</li>
				<li>Python</li>
				<li>PHP</li>
			</ul>
		</div>
		<div class="box green-box">
			<h3>Featured Side Project</h3>
			<ul>
				<li><a href="https://kamehouseweekly.netlify.app/" target="_blank">Local Smash Tournament Result Tracker</a>
			</ul>
		</div>

	</div>
</div>