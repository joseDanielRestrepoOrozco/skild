import { createFileRoute, Link } from '@tanstack/react-router';
import { Terminal } from 'lucide-react';
import SkillCard from '#/components/SkillCard';

export const Route = createFileRoute('/')({ component: Home });

const skills = [
	{
		id: '1',
		title: 'Skill One',
		slug: 'skill-one',
		description: 'This is the first skill.',
		category: 'Category A',
		tags: ['tag1', 'tag2'],
		installCommand: 'npm install skill-one',
		createdAt: '2026-05-18T00:00:00Z',
		authorClerkId: 'clerk123',
		authorEmail: 'author1@example.com',
		updatedAt: '2026-05-18T12:00:00Z',
	},
	{
		id: '2',
		title: 'Skill Two',
		slug: 'skill-two',
		description: 'This is the second skill.',
		category: 'Category B',
		tags: ['tag3', 'tag4'],
		installCommand: 'npm install skill-two',
		createdAt: '2026-05-17T00:00:00Z',
		authorClerkId: 'clerk124',
		authorEmail: 'author2@example.com',
		updatedAt: '2026-05-17T12:00:00Z',
	},
	{
		id: '3',
		title: 'Skill Three',
		slug: 'skill-three',
		description: 'This is the third skill.',
		category: 'Category C',
		tags: ['tag5', 'tag6'],
		installCommand: 'npm install skill-three',
		createdAt: '2026-05-16T00:00:00Z',
		authorClerkId: 'clerk125',
		authorEmail: 'author3@example.com',
		updatedAt: '2026-05-16T12:00:00Z',
	},
	{
		id: '4',
		title: 'Skill Four',
		slug: 'skill-four',
		description: 'This is the fourth skill.',
		category: 'Category D',
		tags: ['tag7', 'tag8'],
		installCommand: 'npm install skill-four',
		createdAt: '2026-05-15T00:00:00Z',
		authorClerkId: 'clerk126',
		authorEmail: 'author4@example.com',
		updatedAt: '2026-05-15T12:00:00Z',
	},
	{
		id: '5',
		title: 'Skill Five',
		slug: 'skill-five',
		description: 'This is the fifth skill.',
		category: 'Category E',
		tags: ['tag9', 'tag10'],
		installCommand: 'npm install skill-five',
		createdAt: '2026-05-14T00:00:00Z',
		authorClerkId: 'clerk127',
		authorEmail: 'author5@example.com',
		updatedAt: '2026-05-14T12:00:00Z',
	},
];

function Home() {
	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registre for <br />
						<span className="text-gradient">Agentic Intelligence</span>
					</h1>
					<p>
						A high performance registry for procedural agent skills. Discover,
						public, and operate reusable agent capabilities from a route-driven
						workspace.
					</p>
				</div>
				<div className="actions">
					<Link to="skills" className="btn-primary">
						<Terminal size={18} />
						<span>Browse registry</span>
					</Link>
					<Link to="/skills/new" className="btn-secondary">
						Publish Skills
					</Link>
				</div>
			</section>
			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created <span className="text-gradient">Skills</span>
					</h2>
					<p> Latest skills loaded from database in creation order.</p>
				</div>
				<div>
					{skills.length > 0 ? (
						<div className='skills-grid'>
							{skills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					) : (
						<p>No skills have been created yet.</p>
					)}
				</div>
			</section>
			<h1>Hello from tanstack start</h1>
		</div>
	);
}
