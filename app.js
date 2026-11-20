/* AxonEDU shared app.js — multi-page */

var MYTH=[
TF('AI always tells the truth.',false),TF('Training data can make an AI unfair.',true),TF('You should fact-check AI answers.',true),
TF('AI understands things exactly like humans do.',false),TF('Deepfakes can be made with AI.',true),TF('Prompts with more context usually work better.',true),
TF('It is fine to share passwords with a chatbot.',false),TF('AI is always unbiased because it is a computer.',false),TF('Chatbots can make up fake sources.',true),
TF('Only experts can learn to use AI well.',false),TF('Having AI quiz you can help you study.',true),TF('AI-detection software is perfectly accurate.',false),
TF('Bigger AI models never make mistakes.',false),TF('If AI wrote it, school rules about it do not apply.',false),TF('AI learns from data instead of rules typed for every case.',true),
TF('Your chats with AI tools may be stored.',true),TF('Generative AI can create new images from text.',true),TF('AI has feelings and wants.',false),
TF('Humans should review high-stakes AI decisions.',true),TF('An AI-made image is proof that an event happened.',false),TF('Good prompts often include a format and an audience.',true),
TF('AI will replace every job tomorrow.',false),TF('Training large AI models can use a lot of electricity.',true),TF('You cannot ask an AI to revise its answer.',false),
TF('A confident tone means an AI answer is correct.',false),TF('Different AI tools can give different answers to the same prompt.',true),TF('AI can imitate a voice from a short recording.',true)
];

var PROMPT=[
Q('Which prompt will give the best study help?','Explain the main causes of the Civil War in 5 bullets for a 10th grader','Tell me about the Civil War','Civil War','Write everything about wars'),
Q('The AI’s first answer is too long. What should you do?','Ask it to shorten the answer to 100 words','Give up','Retype the prompt in caps','Accept it'),
Q('Which prompt adds useful context?','Fix the grammar in my essay for 9th-grade English, keeping my ideas','Fix my essay','Make it good','Essay help'),
Q('You want an example. Best follow-up?','Give one real-world example of this idea','More','Why','Again'),
Q('Best way to use AI on a math problem?','Try it first, then ask AI to check your steps','Copy the answer','Ask for the answer only','Skip the problem'),
Q('How do you test an AI’s claim?','Check a trusted source','Trust it','Ask it twice','Ignore it'),
Q('Which prompt asks for a summary well?','Summarize this paragraph in 3 bullets for a 10th grader, then list 2 key terms','Summarize','Make it short','Tell me everything'),
Q('Which prompt asks for a useful format?','List the pros and cons of solar power in a two-column table','Solar','Tell me about energy','Explain'),
Q('Which prompt sets a helpful role?','Act as a patient tutor and quiz me on fractions, one question at a time','Fractions','Be smart','Math now'),
Q('You got a vague answer. Best follow-up?','Add details: “Make it specific to a high school chemistry class”','Say “bad”','Ask the same thing again','Give up'),
Q('To reduce made-up facts, a prompt can include…','“Use only the text I pasted, and say if you are unsure”','“Be confident”','“Make up details”','Nothing'),
Q('You want feedback on your essay. Best prompt?','Give feedback on my thesis and organization, but do not rewrite it','Rewrite my essay','Fix','Make it A+'),
Q('Which prompt helps you learn a hard idea?','Explain it with an analogy, then ask me 2 questions to check I understand','Just give the answer','Define it','Skip'),
Q('Which prompt best asks for a comparison?','Compare mitosis and meiosis in a table with 4 differences','Mitosis','Explain cells','What is better')
];
var TERMS=[['Machine learning','Software that learns patterns from examples instead of fixed rules'],['Training data','The examples an AI learns from'],['Hallucination','When AI confidently states something false or invented'],['Bias','Unfair patterns an AI picks up from its data'],['Prompt','The instruction or question you give an AI'],['Deepfake','An AI-made fake image, audio or video of a real person'],['Generative AI','AI that creates new text, images or audio'],['Iteration','Improving an answer through follow-up requests'],['Plagiarism','Passing off someone else’s or an AI’s work as your own'],['Privacy','Keeping personal information out of tools you do not control'],['Algorithm','Step-by-step instructions a computer follows'],['Neural network','Layers of connected units that learn patterns'],['Token','A small chunk of text a language model reads'],['Large language model','AI trained on huge amounts of text to predict and write language'],['Model','The trained set of numbers that captures patterns'],['Parameter','A number inside a model that is adjusted during training'],['Supervised learning','Learning from examples that come with correct labels'],['Chatbot','A program you can hold a conversation with'],['Context window','How much text a model can consider at once'],['Fine-tuning','Extra training that specializes a model'],['Automation','Using technology to do tasks with little human effort'],['Transparency','Being open about how and when AI was used'],['Human in the loop','A person reviews or approves AI decisions'],['Overfitting','Memorizing training data instead of learning general patterns'],['Reverse image search','Finding where else an image appears online'],['Citation','A note crediting where information came from']];
var ALLQ=QUIZ.concat(MYTH,PROMPT);

var MODS=[
{id:'basics',t:'AI Basics',ic:'01',tags:['Easy','Essential','First'],d:'What AI really is, how it learns, and where it falls short.',L:[
['What is AI?',['Artificial intelligence (AI) is the field of building computer systems that do tasks that usually need human intelligence, such as recognizing speech, spotting faces in photos, translating languages, or recommending videos.','Almost all AI today is “narrow”: it is very good at one kind of task and cannot easily transfer that skill to something else. A chess program cannot write a poem, and a poem-writing program cannot drive a car.','AI does not think or understand the way people do. It finds patterns in data and uses math to predict what is most likely. When your phone suggests the next word, it is calculating probabilities from patterns in huge amounts of text.','You already meet AI daily: spam filters, map apps that reroute around traffic, streaming recommendations, and voice assistants. “General” AI, a machine as flexible as a human, does not exist today and is still a research goal.'],[
Q('Most AI in use today is best described as…','Narrow: built for one kind of task','General: able to do anything humans can','Conscious','Magic'),
Q('When a phone suggests your next word, it is mainly…','Calculating what is most likely from patterns','Reading your mind','Looking in your diary','Choosing randomly'),
Q('Which is an everyday example of AI?','A video app recommending shows','A paper map','A light switch','A pencil')]],
['How machines learn',['Traditional programs follow rules that a person wrote. Machine learning flips this: you give the computer many examples, and it adjusts itself until it can find the pattern on its own.','There are three main styles. In supervised learning, examples come with answers (labels), like photos tagged “cat” or “dog”. In unsupervised learning, the AI finds groups without labels. In reinforcement learning, it learns by trial and error, earning rewards for good results, like a game-playing AI.','The result of training is a model: a large collection of numbers, called parameters, that capture the patterns. Training means nudging those numbers again and again to reduce mistakes.','After training, the model is tested on new examples it has never seen. This checks that it can handle new situations instead of just memorizing, a problem called overfitting.'],[
Q('In supervised learning, training examples come with…','Correct labels or answers','Nothing at all','Random noise','A teacher in the room'),
Q('What is a “model” in machine learning?','The trained numbers that capture patterns','A person who poses for photos','A paper rule book','A type of screen'),
Q('Why test an AI on examples it has not seen?','To check it works on new situations, not only memorized ones','To make it faster','To delete the data','To reset it')]],
['Data: fuel and flaw',['Data is the collection of examples an AI learns from: text, images, audio, numbers. In general, more and better data leads to better performance.','Quality matters as much as quantity. Errors, outdated facts, or missing groups of people get copied into the AI. People say “garbage in, garbage out”.','Real studies have shown the effect. Research such as the 2018 Gender Shades project found that some face-analysis systems made more mistakes on darker-skinned women, partly because of who was in the training data.','Good practice includes collecting data from many kinds of people and situations, checking that labels are correct, and testing the AI on different groups before using it.'],[
Q('“Garbage in, garbage out” means…','Poor-quality data leads to poor AI results','AI recycles trash','Fast data is best','Data does not matter'),
Q('An AI trained mostly on one group of people will probably…','Work worse for groups it saw less','Work perfectly for everyone','Refuse to run','Ignore the data'),
Q('Which helps make an AI fairer?','Training and testing on diverse data','Using less data','Hiding the results','Skipping tests')]],
['Neural networks and deep learning',['A neural network is a math structure loosely inspired by the brain. It is built from layers of simple connected units, often called neurons, that pass numbers to each other.','Each connection has a weight, a number that says how strongly one unit affects the next. Training is the process of adjusting millions or billions of these weights.','“Deep learning” means a network with many layers. In an image model, early layers might detect edges, middle layers shapes, and later layers whole objects like faces or cars.','Deep learning took off around 2012 because large datasets and powerful chips called GPUs became available. These networks are powerful but hard to explain: even experts struggle to say exactly why one gave a certain answer. This is called the “black box” problem.'],[
Q('What does training a neural network adjust?','The weights on its connections','Its screen brightness','Its password','Its name'),
Q('“Deep” in deep learning refers to…','Having many layers','Being hidden underground','Being difficult to read','Using old data'),
Q('The “black box” problem means…','It is hard to explain why the AI gave a certain answer','The AI is stored in a black case','The AI only works at night','The AI hides passwords')]],
['AI versus human intelligence',['AI can beat people at narrow tasks such as chess, predicting protein shapes, or spotting patterns in medical scans. It is fast, consistent, and does not get tired.','But AI lacks common sense, lived experience, and true understanding. It can fail in strange ways when a situation looks different from its training data.','People bring judgment, ethics, empathy, and creativity grounded in real life. The best results often come from people and AI working together, with the human making the final call.','A simple rule: use AI as a tool, and remember you stay accountable for what you submit and decide.'],[
Q('Which is a strength of AI?','Fast, consistent work on narrow tasks','Deep common sense','Understanding feelings','Moral judgment'),
Q('Which is a limit of today’s AI?','Weak common sense outside its training','It cannot be fast','It cannot use data','It cannot run on computers'),
Q('Who is responsible for AI-assisted work you hand in?','You are','The AI','Nobody','The internet')]]
]},

{id:'tools',t:'Practical AI Tools',ic:'02',tags:['Easy','Essential'],d:'Tools that can help with school work, and how to use them well.',L:[
['The AI toolbox',['AI tools come in many types. Chatbots answer questions in text. Image generators make pictures from descriptions. Translators convert languages. Coding assistants help write programs. Study tools make flashcards and summaries. Accessibility tools turn speech into text and text into speech.','Different tools suit different jobs. Pick the tool that fits the task instead of using one chatbot for everything.','Before using any tool, check your school’s rules and the tool’s privacy settings. Some tools store what you type, and some have age limits.','A good habit is to ask yourself three questions: What am I trying to learn or make? Is this tool allowed? What information am I giving it?'],[
Q('Which tool type turns spoken words into text?','Speech-to-text','Image generator','Translator only','Spreadsheet'),
Q('Best way to pick an AI tool?','Match it to the job and check school rules','Use whatever is trending','Pick the first result','Use the most expensive one'),
Q('Why check a tool’s privacy settings?','What you type may be stored','To make it faster','To change its color','They are always identical')]],
['Studying with a chatbot',['A chatbot can act like a patient tutor. You can ask it to explain an idea in simpler words, give examples, quiz you, or check your reasoning step by step.','One strong technique is “explain it back”: write the concept in your own words, then ask the AI to point out gaps or mistakes. You learn because you do the thinking first.','Ask for hints and steps instead of final answers, especially in math and science. If you only collect answers, you practice copying, not solving.','Asking an AI to complete a whole assignment skips the learning and often breaks school rules. Use it to understand, not to replace your effort.'],[
Q('Which use of a chatbot helps you learn most?','Asking it to quiz you and explain mistakes','Asking it to do the assignment','Asking for only final answers','Never reading your notes'),
Q('The “explain it back” method means…','You explain the idea yourself, then ask AI to find gaps','AI explains and you copy','You repeat what AI said word for word','You skip explaining'),
Q('Asking AI to do your entire assignment mostly…','Skips the learning and may break the rules','Improves your memory','Is always allowed','Makes you faster at tests')]],
['Notes, summaries and flashcards',['AI can summarize a long reading, but summaries lose detail and can introduce errors. Treat a summary as a map, then skim the original to confirm important points.','Flashcards work best when they come from your own class notes, because making and checking them is itself studying.','Use spaced repetition: review cards at growing gaps, such as tomorrow, in three days, then in a week. This beats cramming for long-term memory.','Only paste material you are allowed to share, and leave out private information like names, grades, or addresses.'],[
Q('A risk of AI summaries is…','Missing or distorted details','They are always too long','They cannot be read','They are illegal'),
Q('Spaced repetition means…','Reviewing material at growing time gaps','Studying once all night','Reading one page','Skipping review'),
Q('What should you avoid pasting into an AI tool?','Private information like addresses or grades','A paragraph from your own notes','A math problem you are practicing','A vocabulary list you made')]],
['Research and fact-checking',['AI can invent sources: titles, authors, and links that look real but do not exist. This is a hallucination, and it is especially common when you ask for exact citations.','Use AI to brainstorm search terms, explain background, and suggest questions. Then find real sources yourself in library databases, government sites, universities, and reputable news outlets.','Try lateral reading: open new tabs and search for who is behind a source and what other trustworthy sites say about it, instead of judging only by how the page looks.','Verify every number, date, and quote before using it, and cite the real source you found, not the chatbot.'],[
Q('What should you do with a source an AI gives you?','Confirm it exists by finding it yourself','Cite it without checking','Assume it is real','Ignore all sources'),
Q('Lateral reading means…','Checking what other sources say about a source','Reading sideways','Reading very fast','Reading only the title'),
Q('AI is best used in research to…','Brainstorm search terms and explain background','Replace all real sources','Write citations from memory','Skip fact-checking')]],
['Accessibility and creative tools',['Many AI features make learning more accessible. Speech-to-text helps students who struggle to type, text-to-speech reads aloud, captions help with listening, and translation supports students learning English.','AI can also adjust reading level, break long text into smaller chunks, or describe images for people with low vision.','For creative work, AI can help you brainstorm ideas, find a rhythm for a song, or try layouts. The creative choices and the final voice should still be yours.','When AI helps with a creative project, follow class rules and say so. Honest credit builds trust.'],[
Q('Which AI feature can help a student who struggles to type?','Speech-to-text dictation','A bigger keyboard only','Auto-delete','Screen lock'),
Q('When AI helps with creative work, you should…','Be open about it and follow class rules','Hide it','Claim it did nothing','Delete the project'),
Q('AI translation is best used to…','Get the gist, then check important wording','Replace every language teacher','Guarantee perfect grammar','Write legal contracts alone')]]
]},

{id:'ethics',t:'Ethical AI Use',ic:'03',tags:['Essential','Medium'],d:'Honesty, fairness, privacy and responsibility.',L:[
['Academic integrity',['Plagiarism means presenting someone else’s work as your own, and that includes work written by AI. Your school may allow AI for some tasks, require citation for others, and ban it for tests.','Always read the policy for each class. If it is unclear, ask your teacher before you start, not after you submit.','When AI is allowed, disclose how you used it: for example, “I used a chatbot to brainstorm topics and check my grammar.” Being open protects you.','AI-detection tools are not fully reliable and can wrongly flag honest work. Keep drafts, notes, and version history so you can show your own process.'],[
Q('If AI helped with your work, you should…','Follow school policy and disclose it','Hide it','Delete your notes','Blame the AI'),
Q('AI-detection tools are…','Not fully reliable and can be wrong','Always correct','Required by law','Never used'),
Q('A good way to show your own process is to…','Keep drafts and notes','Delete earlier versions','Submit in one go','Avoid taking notes')]],
['Bias and fairness',['AI bias can come from data, from how examples are labeled, and from design choices. If the data reflects unfair patterns in the past, the AI can repeat them.','Reports have described experimental hiring tools that learned to favor men because past hires were mostly men. Facial analysis tools have also been less accurate for some groups.','Bias matters most when AI helps decide things about people, such as jobs, loans, school admissions, or policing.','Ask who is missing from the data, test the system on different groups, publish limits, and keep humans involved in important decisions.'],[
Q('Where can AI bias come from?','Data, labeling and design choices','Only from electricity','Only from users’ clothes','It cannot happen'),
Q('A hiring AI trained on past hires that were mostly men might…','Favor men unfairly','Treat everyone equally for sure','Refuse all applicants','Ignore resumes'),
Q('A good step to reduce bias is to…','Test the system on different groups of people','Use less testing','Hide the training data','Avoid asking questions')]],
['Privacy and data',['Many AI tools store what you type, and some use it to improve their models. Depending on the tool and settings, your chats could be seen by company staff or leaked in a breach.','Never share passwords, home addresses, ID numbers, or private details about other people. Photos, voice recordings, and school records are personal data too.','Look for privacy and data settings, such as turning off chat history or opting out of training when the option exists.','A simple test: if you would not post it publicly, do not paste it into an AI tool.'],[
Q('Which is safest to type into a public chatbot?','A general question about photosynthesis','Your password','Your home address','A classmate’s private details'),
Q('Why not paste a classmate’s private details into AI?','It could expose their information','It makes the AI tired','It is faster','There is no reason'),
Q('What should you check in an AI app?','Privacy and data settings','Only the logo','The color theme','Nothing')]],
['Misinformation and deepfakes',['Generative AI can produce convincing fake text, images, audio, and video. A deepfake is a fake that imitates a real person’s face or voice.','Clues like odd hands, garbled text, or lighting that does not match can help today, but fakes keep improving. Visual clues alone are not enough.','Pause before sharing. Check trusted news sources, look for the original upload, and try a reverse image search to see where else the image appears.','Making fake images or audio of classmates or teachers can harm people and may break school rules or laws. Do not create or spread them.'],[
Q('Best first step with a shocking viral video?','Pause and check trusted sources','Share it right away','Assume it is true','Comment angrily'),
Q('Why can’t you rely only on visual clues to spot fakes?','AI keeps improving and fixing obvious flaws','Fakes are always perfect','Clues never exist','Photos cannot be edited'),
Q('Making a fake image of a classmate is…','Harmful and can break rules or laws','A harmless joke always','Required in some classes','Good practice')]],
['Responsibility, transparency and impact',['When AI makes a mistake, people and organizations are still responsible. “The computer did it” is not an excuse. Whoever builds, chooses, or uses a system shares accountability.','Transparency means being open about when and how AI is used, and being honest about what it cannot do.','Decisions with big consequences for people, such as health, law, or grades, should include human review.','AI also has costs. Training and running large models uses a lot of electricity and often water for cooling, and AI is changing jobs. Use AI thoughtfully, and build skills that work alongside it.'],[
Q('High-stakes decisions about people should…','Include human review','Be fully automatic','Be hidden','Be random'),
Q('Why does AI have an environmental impact?','Training and running models uses large amounts of energy','AI uses paper','AI is made of metal only','It does not'),
Q('Transparency means…','Being open about when and how AI was used','Hiding AI use','Making AI invisible','Deleting records')]]
]},

{id:'gen',t:'Generative AI',ic:'04',tags:['Medium'],d:'How AI writes, draws and composes, and where it goes wrong.',L:[
['What generative AI is',['Most older AI classified or predicted things: is this email spam, what is in this photo. Generative AI creates new content such as text, images, music, code, and video.','Generative models learn from enormous collections of existing examples. They pick up patterns of how words fit together or how shapes and colors look, then produce something new that follows those patterns.','Familiar examples include chatbots that write essays or answers, image tools that turn a description into a picture, and tools that turn text into speech or music.','Because the output is new each time, the same prompt can give different results.'],[
Q('What makes AI “generative”?','It creates new content','It only sorts emails','It only stores files','It only searches'),
Q('Which is a generative AI task?','Writing a poem from a prompt','Sorting numbers','Spell checking only','Counting words'),
Q('Generative models learn from…','Large amounts of existing examples','One single file','Nothing','Only the user’s memory')]],
['How language models work',['A large language model (LLM) is trained on huge amounts of text. Its core skill is predicting the next token, a small chunk of text such as a word or part of a word, over and over to build a response.','After the first training, models are often tuned further using human feedback, so their answers are more helpful and safer.','A model has a context window, which limits how much text it can consider at once. Very long chats or documents may push early details out.','LLMs do not look facts up like a database unless connected to search tools. They generate text that sounds right based on patterns, which is why they can be fluent and wrong.'],[
Q('A large language model mainly works by…','Predicting the next piece of text','Copying web pages exactly','Reading minds','Using a calculator only'),
Q('A “token” is…','A small chunk of text','A coin','A password','A video frame'),
Q('Context window means…','How much text the model can consider at once','The browser window','The time of day','A pop-up ad')]],
['Hallucinations and limits',['A hallucination is a confident answer that is false or invented. It might be a made-up quote, a book that does not exist, or a wrong date.','Hallucinations are more likely with obscure topics, very specific requests like exact page numbers, and questions that assume something false.','You can reduce them: give the AI the text to work from, ask it to say when it is unsure, and request sources you can check.','Always verify important claims with reliable sources. A confident tone does not mean an answer is correct.'],[
Q('A hallucination is…','A confident answer that is false or invented','A spelling mistake','A slow reply','A long answer'),
Q('Which request is most likely to produce made-up details?','Exact page numbers from an obscure study','Adding 2 + 2','Defining “noun”','Naming the seasons'),
Q('Best way to check an important AI claim?','Verify with reliable sources','Ask again politely','Trust the tone','Check nothing')]],
['Images, audio and video',['Many image generators use a method called diffusion. They start from random noise and refine it step by step into a picture that matches your text description.','Similar approaches can create music, voices, and short videos. Quality is improving quickly, which makes spotting fakes harder.','There are open debates. Many artists argue that training on their work without permission is unfair, and courts and lawmakers are still working out the rules.','If you use an AI image in a project, label it as AI-generated, avoid imitating real people’s identity, and follow class and platform rules.'],[
Q('Many image generators start from…','Random noise refined step by step','A finished photo','A blank paper scan','Your camera roll'),
Q('A debated issue about image AI is…','Whether training on artists’ work without permission is fair','Whether images have pixels','Whether screens glow','Whether colors exist'),
Q('If you use an AI image in a project…','Label it as AI-generated','Hide the source','Claim you drew it','Remove the title')]],
['Creativity, authorship and copyright',['AI can be a brainstorming partner: it can suggest ideas, titles, plot twists, or ways to organize an argument. You decide what to keep and make it your own.','In the United States, the Copyright Office has said that copyright protection depends on human authorship. Purely AI-generated material generally cannot be copyrighted, though human creative choices added to it can matter.','Do not present AI text as your own voice. Teachers and readers want to see your thinking, and your writing improves only when you do the writing.','Credit tools and sources honestly, and when remixing someone else’s work, get permission or use material that allows reuse.'],[
Q('In creative work AI is best used as…','A brainstorming partner while you make final choices','A replacement for your voice','A way to avoid thinking','A secret'),
Q('In the US, copyright generally requires…','Human authorship','A robot signature','A big budget','A school stamp'),
Q('Why does your own voice matter?','Teachers and readers want to see your thinking','AI cannot write words','Voices are loud','Grammar is optional')]]
]},

{id:'opt',t:'Optimizing Your AI Use',ic:'05',tags:['Hard'],d:'Prompt craft, checking work, study systems, and knowing when not to use AI.',L:[
['Anatomy of a good prompt',['A strong prompt usually covers five things: role (who the AI should act as), context (who you are and what you need), task (what to do), format (how the answer should look), and constraints (length, tone, what to avoid).','Compare “Tell me about photosynthesis” with “Act as a tutor. I am a 9th grader. Explain photosynthesis in 5 bullet points, then ask me 2 questions to check my understanding.” The second gives the AI a target.','Include any text or data the AI should use, and say what to do if information is missing.','Short prompts are fine for simple tasks. Add detail whenever the first answer misses what you wanted.'],[
Q('Which prompt element tells the AI the shape of the answer?','Format','Role only','Luck','Volume'),
Q('Why add context like your grade level?','It helps the AI aim the answer at you','It makes the AI slower','It is required','It changes nothing'),
Q('Which prompt is stronger?','Act as a tutor and explain fractions to a 6th grader with 3 examples','Fractions','Math please','Tell me stuff')]],
['Iterating and refining',['Treat the first answer as a draft. Follow up with specific requests: make it shorter, give an example, explain step by step, use simpler words, or argue the opposite side.','You can ask the AI to ask you questions first. This helps it learn what you need and often improves the result.','Compare more than one version, and combine the best parts yourself. Your judgment is the editor.','If the conversation drifts or gets long, start a fresh chat and paste a short summary of what matters.'],[
Q('The first AI answer should be treated as…','A draft you can improve','The final truth','A threat','Useless'),
Q('Which follow-up is useful?','Make it shorter and add one example','Do it again','Whatever','Fix everything'),
Q('If a long chat drifts, you can…','Start a new chat with a short summary','Keep typing in caps','Close the laptop','Delete your notes')]],
['Verifying and critiquing outputs',['Check every AI answer with a quick routine: is it accurate, complete, fair, and based on real sources? Does it actually answer the question?','You can ask the AI to critique its own answer or list weaknesses, but that does not replace checking independent sources.','Cross-check key facts with a second source. For code, run it and test edge cases. For math, check the steps.','Watch for bias and one-sided framing, and notice when the AI sounds more sure than the evidence allows.'],[
Q('Asking AI to critique its own answer…','Helps, but you still need independent checking','Replaces all fact-checking','Always fixes it','Is forbidden'),
Q('For AI-written code you should…','Run and test it','Trust it blindly','Never run it','Print it only'),
Q('A good check of a key fact is to…','Confirm it in a second reliable source','Ask the same AI again only','Skip it','Count the words')]],
['Study systems with AI',['Learning science favors active methods: retrieval practice (testing yourself), spacing (reviewing over days), and interleaving (mixing topics). AI can create practice questions and track what you miss.','The Feynman technique pairs well with AI: explain a topic in simple words, find where you get stuck, then ask the AI to help fill only those gaps.','Build a routine: read or attempt first, quiz yourself, review mistakes, and schedule your next review.','Keep notes on your weak spots. The goal is for you to get better without the AI.'],[
Q('Retrieval practice means…','Testing yourself from memory','Rereading only','Highlighting everything','Sleeping on notes'),
Q('Interleaving means…','Mixing different topics while practicing','Studying one topic only','Copying notes','Studying in silence only'),
Q('A good AI study routine is…','Try first, quiz yourself, review mistakes','Read answers only','Copy the AI','Avoid practice')]],
['When not to use AI',['Sometimes the struggle is the learning. If your goal is to build writing fluency, math skill, or deep understanding, doing the work yourself is the point. Psychologists call this “desirable difficulty”.','Do not use AI when rules forbid it, when private information is involved, or for high-stakes medical, legal, or safety decisions without a qualified person.','Also skip it when it would be faster to do by hand, or when you cannot check the answer.','Build the habit: try first, then use AI to check, stretch, or practice. That keeps you in charge.'],[
Q('“Desirable difficulty” means…','Effortful practice can help you learn more deeply','Hard things are always bad','Difficulty means failure','Learning should be effortless'),
Q('Which situation calls for NOT using AI?','The rules forbid it','You want to brainstorm where allowed','You want a quiz on your notes','You want a rephrased hint'),
Q('A habit that keeps you in charge is…','Try first, then use AI to check','Use AI first every time','Never check','Share every detail')]]
]}
];

var ACH=[
['first','L1','First Lesson','Complete your first lesson',function(c){return c.les>=1}],
['five','L5','Warm-Up','Complete 5 lessons',function(c){return c.les>=5}],
['ten','L10','Deep Diver','Complete 10 lessons',function(c){return c.les>=10}],
['all','AI','AI Scholar','Complete every lesson',function(c){return c.les>=c.tot}],
['mod','M1','Module Master','Finish a module',function(c){return c.mods>=1}],
['mod3','M3','Triple Threat','Finish 3 modules',function(c){return c.mods>=3}],
['basics','FN','Foundations','Finish AI Basics',function(c){return c.md.basics}],
['tools','TL','Toolkit','Finish Practical AI Tools',function(c){return c.md.tools}],
['ethics','ET','Ethics Champion','Finish Ethical AI Use',function(c){return c.md.ethics}],
['gen','GN','Creator','Finish Generative AI',function(c){return c.md.gen}],
['opt','PP','Prompt Pro','Finish Optimizing Your AI Use',function(c){return c.md.opt}],
['lvl3','Lv3','Rising Star','Reach level 3',function(c){return c.lv>=3}],
['lvl5','Lv5','On a Roll','Reach level 5',function(c){return c.lv>=5}],
['lvl10','Lv10','Veteran','Reach level 10',function(c){return c.lv>=10}],
['xp500','5H','500 Club','Earn 500 XP',function(c){return c.xp>=500}],
['xp1000','1K','1,000 Club','Earn 1,000 XP',function(c){return c.xp>=1000}],

['win','RW','Race Winner','Win a Quiz Race',function(c){return c.st&&c.st.raceWins>=1}],
['win5','R5','Race Veteran','Win 5 races',function(c){return c.st&&c.st.raceWins>=5}],
['play10','G10','Regular','Play 10 games',function(c){return c.st&&c.st.played>=10}],
['play25','G25','Dedicated','Play 25 games',function(c){return c.st&&c.st.played>=25}],
['doc','Rx','Prompt Doctor','Win a Prompt Doctor round',function(c){return c.st&&c.st.docWins>=1}],
['fc','FC','Memory Maker','Clear a Flashcard Sprint deck',function(c){return c.st&&c.st.fcDone>=1}],
['match','MU','Quick Match','Finish Match Up in under 60 seconds',function(c){return c.st&&c.st.matchFast>=1}],
['b1','B1','Sharpshooter','Clear round 1 in Quiz Blaster',function(c){return c.st&&c.st.blRounds>=1}],
['b3','B3','Dead Eye','Clear 3 rounds in Quiz Blaster',function(c){return c.st&&c.st.blRounds>=3}],
['b500','B5','Big Score','Score 500+ in one Quiz Blaster game',function(c){return c.st&&c.st.blBest>=500}],
['duel','D1','First Duel','Play a friend duel',function(c){return c.st&&c.st.duels>=1}],
['dwin','DW','Duelist','Win a duel',function(c){return c.st&&c.st.duelWins>=1}],
['dwin5','D5','Champion','Win 5 duels',function(c){return c.st&&c.st.duelWins>=5}],

['gem1','GM','Gem Hunter','Score 1,000 in Gem Match',function(c){return c.st&&c.st.gemBest>=1000}],
['gemq','GQ','Smart Matcher','Answer 10 Gem Match questions correctly',function(c){return c.st&&c.st.gemQ>=10}],
['perf','PF','Perfect Score','Ace a lesson quiz on the first try',function(c){return c.st&&c.st.perfect>=1}],
['fr1','F1','Friendly','Add a friend',function(c){return c.fr>=1}],
['fr5','F5','Social','Add 5 friends',function(c){return c.fr>=5}],
['team','TM','Team Player','Set your school and class code',function(c){return c.sch&&c.cls}]];
var BADGES=ACH.map(function(a){return[a[0],a[1],a[2],a[3]]});
var AVS=[['#6d6bff,#22d3ee','Aurora',1],['#f43f5e,#fb923c','Ember',1],['#10b981,#22d3ee','Mint',2],['#8b5cf6,#ec4899','Nebula',3],['#f59e0b,#ef4444','Solar',4],['#0ea5e9,#1e3a8a','Deep',5],['#9ca3af,#4b5563','Chrome',6]];
var FAKE=['Maya R.','Jordan T.','Priya S.','Leo M.','Sofia G.','Dev K.','Ava L.','Noah B.','Zoe C.','Eli W.'];
var STATS=[['64%','of U.S. teens use AI chatbots','Pew Research Center, Feb 2026'],['26%','used ChatGPT for schoolwork (2024)','Pew Research Center, Jan 2025'],['38%','of global employment exposed to AI','IMF Blog, Jan 2024'],['13%','used ChatGPT for schoolwork (2023)','Pew Research Center, Jan 2025']];
var NEWS=[['Models get better at reasoning','Newer AI systems can work through multi-step math and science problems, showing their steps along the way.','Advancement'],['Schools write AI policies','Districts are publishing guidelines on when AI help is allowed, and many ask students to cite it.','Education'],['AI helps spot disease earlier','Researchers are testing image-analysis tools that flag possible problems for doctors to review.','Science'],['Concerns: errors and over-reliance','Teachers note AI can be wrong and that leaning on it can weaken practice with writing and problem-solving.','Caution'],['Open and small models grow','Smaller models are now able to run on laptops and phones, making AI more widely available.','Advancement'],['Calls for clearer labels','Some groups want AI-made images and text to be clearly marked so people aren’t misled.','Caution']];

var REFS=[
['Pew Research Center (2026)','How Teens Use and View AI','https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/','64% of U.S. teens use AI chatbots; about 3 in 10 use them daily; 54% used chatbots for schoolwork.'],
['Sidoti & Park, Pew Research Center (2025)','About a Quarter of U.S. Teens Have Used ChatGPT for Schoolwork','https://www.pewresearch.org/short-reads/2025/01/15/about-a-quarter-of-us-teens-have-used-chatgpt-for-schoolwork-double-the-share-in-2023/','26% in 2024, up from 13% in 2023.'],
['Georgieva, IMF Blog (2024)','AI Will Transform the Global Economy','https://www.imf.org/en/blogs/articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity','Almost 40% of global employment is exposed to AI.'],
['Dunlosky et al. (2013)','Improving Students’ Learning With Effective Learning Techniques','https://doi.org/10.1177/1529100612453266','Practice testing and distributed practice rated high utility for student learning.'],
['Buolamwini & Gebru (2018)','Gender Shades','http://proceedings.mlr.press/v81/buolamwini18a.html','Found face-analysis systems made more mistakes on darker-skinned women, partly due to training data.'],
['U.S. Copyright Office (2025)','Copyright and AI, Part 2: Copyrightability','https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf','Copyright protection generally requires human authorship.']];

var U=null, route='home', filt='All', lb='world', G=null, FC=null, MU=null, BL=null, GM=null, DG=null, RT=null, INB=null, LQ=null, LT=null, DU={};
var SB_URL='https://rytzhadculmofsblaxju.supabase.co';
var SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5dHpoYWRjdWxtb2ZzYmxheGp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4Mjg3MDIsImV4cCI6MjEwODQwNDcwMn0.d74dfDYWQGKGAmeYS43Bw24PSsdQF1WLHKQGQq7S4CU';
var sb=null, LB={rows:[],note:'',loading:false}, QUIET=false;
try{sb=supabase.createClient(SB_URL,SB_KEY)}catch(e){}
function $(i){return document.getElementById(i)}
function lvl(){return Math.floor(U.xp/100)+1}
function prog(m){return Math.round(((U.done[m.id]||[]).length/m.L.length)*100)}
function toast(t){var d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2400)}
function clean(t){return String(t==null?'':t).replace(/[<>&"'`]/g,'').trim().toUpperCase().slice(0,30)}
function fail(r){if(r&&r.error)toast('Could not save. Check your connection.')}
function fd(t){try{return new Date(t).toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'})}catch(e){return ''}}
function av(sz,u){u=u||U;var i=typeof u.av==='number'?u.av:0;
if(i===7 && u.avc){
 var m=u.avc.match(/^#([0-9a-f]{6}),#([0-9a-f]{6})$/i);
 if(m)return '<span class="av" style="width:'+sz+'px;height:'+sz+'px;font-size:'+Math.round(sz*.45)+'px;background:linear-gradient(135deg,#'+m[1]+',#'+m[2]+')">'+u.name.charAt(0).toUpperCase()+'</span>';
}
return '<span class="av" style="width:'+sz+'px;height:'+sz+'px;font-size:'+Math.round(sz*.45)+'px;background:linear-gradient(135deg,'+AVS[i][0]+')">'+u.name.charAt(0).toUpperCase()+'</span>';
}
function tags(m){return m.tags.map(function(t){return '<span class="tag">'+t+'</span>'}).join('')}
function closeM(){$('modal').innerHTML='';}

async function loadUser(id){
var p=await sb.from('profiles').select('*').eq('id',id).single();
if(p.error||!p.data){await sb.auth.signOut();U=null;return false}
var pr=await sb.from('progress').select('module_id,lessons').eq('user_id',id);
U={id:id,name:p.data.username,xp:p.data.xp,av:Math.min(p.data.avatar||0,AVS.length-1),school:p.data.school||'',cls:p.data.class_code||'',done:{},badges:[],created:p.data.created_at,wins:0,st:(p.data.stats&&typeof p.data.stats=='object'?p.data.stats:{}),friends:[],reqIn:[],reqOut:[],avc:p.data.avc||null};
(pr.data||[]).forEach(function(r){U.done[r.module_id]=r.lessons});
U.wins=U.st.raceWins||0;
await loadFriends();
QUIET=true;chk();QUIET=false;startInbox();return true}
async function init(){if(sb){try{var r=await sb.auth.getSession();if(r.data.session)await loadUser(r.data.session.user.id)}catch(e){}}renderPage()}
function loginBox(){$('modal').innerHTML='<div class="modal" onclick="if(event.target==this)$(\'modal\').innerHTML=\'\'"><div class="box"><h2>Log in or sign up</h2><p class="mut">Pick a username (3–16 letters, numbers or _) and a 6-digit PIN. New username? We’ll create your account. Existing one? Enter your PIN to continue. Don’t use your real name.</p><input type="text" id="un" maxlength="16" placeholder="Username" autocomplete="off"><input type="password" id="pin" inputmode="numeric" maxlength="6" placeholder="6-digit PIN" onkeydown="if(event.key==\'Enter\')doLogin()"><button class="btn" id="lgbtn" onclick="doLogin()">Let’s go</button> <button class="btn ghost" onclick="$(\'modal\').innerHTML=\'\'">Cancel</button></div></div>';$('un').focus()}
async function doLogin(){var v=$('un').value.trim(),pin=$('pin').value.trim();
if(!/^[A-Za-z0-9_]{3,16}$/.test(v)){toast('Username: 3–16 letters, numbers or _');return}
if(!/^\d{6}$/.test(pin)){toast('PIN must be exactly 6 digits');return}
if(!sb){toast('Could not reach the cloud service');return}
var b=$('lgbtn');b.disabled=true;var em=v.toLowerCase()+'@synapse.app',r=await sb.auth.signInWithPassword({email:em,password:pin});
if(r.error){var s=await sb.auth.signUp({email:em,password:pin});
if(s.error||!s.data.user){b.disabled=false;toast(s.error&&/registered|already/i.test(s.error.message)?'Wrong PIN for that username':'Sign-up failed. Try again.');return}
if(!s.data.session){b.disabled=false;toast('Sign-up needs "Confirm email" turned off in Supabase');return}
var ins=await sb.from('profiles').insert({id:s.data.user.id,username:v});
if(ins.error){await sb.auth.signOut();b.disabled=false;toast('That username is already taken');return}
r={data:{user:s.data.user}}}
await loadUser(r.data.user.id);$('modal').innerHTML='';toast('Welcome, '+U.name+'!');goPage('dash')}
async function logout(){try{if(INB)sb.removeChannel(INB)}catch(e){}if(RT)liveStop();try{await sb.auth.signOut()}catch(e){}U=null;goPage('home')}

function addXp(n){var before=lvl();U.xp+=n;sb.rpc('add_xp',{n:n}).then(fail);if(lvl()>before)toast('Level up. You are now level '+lvl());chk();saveProgAll()}
function loseXp(n){n=Math.max(0,Math.min(20,n));U.xp=Math.max(0,U.xp-n);sb.rpc('lose_xp',{n:n}).then(fail);chk();saveProgAll()}
function addXpBig(n){while(n>0){var k=Math.min(n,100);addXp(k);n-=k}}
function bump(k,n){U.st[k]=(U.st[k]||0)+(n||1);saveSt();chk()}
function best(k,v){if(v>(U.st[k]||0)){U.st[k]=v;saveSt();chk()}}
function saveSt(){clearTimeout(window._stT);window._stT=setTimeout(function(){if(U&&sb)sb.from('profiles').update({stats:U.st}).eq('id',U.id).then(function(){})},800)}
function saveProgAll(){if(!U)return;Object.keys(U.done).forEach(function(id){saveProg(id)})}
function saveProg(id){sb.from('progress').upsert({user_id:U.id,module_id:id,lessons:U.done[id]}).then(fail)}
function badge(k){if(U.badges.indexOf(k)<0){U.badges.push(k);if(!QUIET)toast('New badge: '+BADGES.filter(function(b){return b[0]==k})[0][2])}}
function chk(){var c={les:0,tot:0,mods:0,md:{},lv:lvl(),xp:U.xp,st:U.st||{},fr:U.friends?U.friends.length:0,sch:U.school,cls:U.cls};MODS.forEach(function(m){var n=(U.done[m.id]||[]).length;c.les+=n;c.tot+=m.L.length;if(n==m.L.length){c.mods++;c.md[m.id]=1}});ACH.forEach(function(a){if(a[4](c))badge(a[0])})}
function setAv(i){U.av=i;sb.from('profiles').update({avatar:i}).eq('id',U.id).then(fail);renderPage()}
function setAvColor(c1,c2){if(!/^#[0-9a-f]{6}$/i.test(c1)||!/^#[0-9a-f]{6}$/i.test(c2)){toast('Pick two valid colors');return}
U.av=7;U.avc=c1+','+c2;sb.from('profiles').update({avatar:7,avc:c1+','+c2}).eq('id',U.id).then(function(r){fail(r);if(!r.error){toast('Custom gradient saved');renderPage()}})}
function saveSet(){U.school=clean($('sch').value);U.cls=clean($('cls').value);chk();sb.from('profiles').update({school:U.school||null,class_code:U.cls||null}).eq('id',U.id).then(function(r){fail(r);if(!r.error)toast('Saved')})}

function quizStart(){
if(!U){loginBox();return}
G={qs:ALLQ.slice().sort(function(){return Math.random()-.5}).slice(0,10),i:0,score:0,wrong:0,start:Date.now()};
$('modal').innerHTML='<div class="game-popup"><div class="game-header"><h2>Quiz Race</h2><button class="btn ghost" onclick="quizClose()">Exit</button></div><div class="game-body" id="game"></div><div class="game-footer"></div></div>';quizDraw();}
function quizClose(){G=null;$('modal').innerHTML='';}
function quizDraw(){
if(G.i>=G.qs.length){quizFinish();return}
var q=G.qs[G.i];var opts=q.o.map(function(o,j){return '<div class="opt" onclick="quizAns('+j+')">'+o+'</div>'}).join('');
var elapsed=Math.floor((Date.now()-G.start)/1000);
$('game').innerHTML='<div class="res">Question '+(G.i+1)+' of 10 · Score '+G.score+' · '+elapsed+'s</div><div class="card"><div class="mut" style="margin-bottom:10px">Q'+(G.i+1)+': '+q.q+'</div>'+opts+'</div>';
}
function quizAns(j){
var q=G.qs[G.i];var correct=j===q.a;
if(correct){G.score++;addXp(5);bump('q_quiz_w');}
else{G.wrong++;loseXp(5);bump('q_quiz_p');}
G.i++;quizDraw();
}
function quizFinish(){
addXpBig(G.score*10);bump('played');if(G.score>=7){bump('raceWins');U.wins++;toast('Race won!')}chk();
var html='<div class="card" style="text-align:center"><h3 style="margin-top:0">Race complete</h3><div class="big">'+G.score+' / 10</div><p class="mut">'+(G.score>=7?'Great work':'Keep practicing')+'</p>';
html+='<div class="game-footer"><button class="btn" onclick="quizClose()">Done</button></div></div>';
$('game').innerHTML=html;
}

function fcStart(){
if(!U){loginBox();return}
FC={deck:QUIZ.slice().sort(function(){return Math.random()-.5}).slice(0,8),i:0,score:0,start:Date.now()};
$('modal').innerHTML='<div class="game-popup"><div class="game-header"><h2>Flashcard Sprint</h2><button class="btn ghost" onclick="fcClose()">Exit</button></div><div class="game-body" id="game"></div><div class="game-footer"></div></div>';fcDraw();}
function fcClose(){FC=null;$('modal').innerHTML='';}
function fcDraw(){
if(FC.i>=FC.deck.length){fcFinish();return}
var q=FC.deck[FC.i];var elapsed=Math.floor((Date.now()-FC.start)/1000);
$('game').innerHTML='<div class="res">Card '+(FC.i+1)+' of '+FC.deck.length+' · Score '+FC.score+' · '+elapsed+'s</div><div class="card"><div class="mut" style="margin-bottom:14px">'+q.q+'</div><button class="btn" style="margin:8px 6px 0 0" onclick="fcReveal()">Show answer</button> <button class="btn ghost" onclick="fcSkip()">Skip</button><div id="fcans" style="margin-top:14px"></div></div>';
}
function fcReveal(){
var q=FC.deck[FC.i];$('fcans').innerHTML='<div style="color:var(--mut)">Answer: <b style="color:var(--pri2)">'+q.o[q.a]+'</b></div>';
$('game').querySelectorAll('button').forEach(function(b){b.disabled=true});
setTimeout(function(){FC.i++;fcDraw()},1500);
}
function fcSkip(){FC.i++;fcDraw();}
function fcFinish(){
bump('played');bump('fcDone');best('fcDone',1);addXpBig(FC.score*8);chk();
var html='<div class="card" style="text-align:center"><h3 style="margin-top:0">Deck cleared</h3><div class="big">'+FC.score+' / '+FC.deck.length+'</div><p class="mut">Nice recall work.</p>';
html+='<div class="game-footer"><button class="btn" onclick="fcClose()">Done</button></div></div>';
$('game').innerHTML=html;FC=null;
}
function muStart(){
if(!U){loginBox();return}
MU={pairs:TERMS.slice().sort(function(){return Math.random()-.5}).slice(0,6),sel:null,moves:0,matches:0,start:Date.now()};
$('modal').innerHTML='<div class="game-popup"><div class="game-header"><h2>Match Up</h2><button class="btn ghost" onclick="muClose()">Exit</button></div><div class="game-body" id="game"></div><div class="game-footer"></div></div>';muDraw();}
function muClose(){MU=null;$('modal').innerHTML='';}
function muDraw(){
if(MU.matches>=MU.pairs.length){muFinish();return}
var all=[];MU.pairs.forEach(function(p,i){all.push({t:p[0],id:'t'+i,g:i});all.push({t:p[1],id:'d'+i,g:i})});
all=all.sort(function(){return Math.random()-.5});
var tiles=all.map(function(a){return '<div class="opt" onclick="muPick(\''+a.id+'\','+a.g+')">'+a.t+'</div>'}).join('');
var elapsed=Math.floor((Date.now()-MU.start)/1000);
$('game').innerHTML='<div class="res">Matches '+MU.matches+'/'+MU.pairs.length+' · Moves '+MU.moves+' · '+elapsed+'s</div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px">'+tiles+'</div>';
}
function muPick(id,g){
if(MU.sel&&MU.sel.id===id)return;
if(!MU.sel){MU.sel={id:id,g:g};return}
MU.moves++;var first=MU.sel;MU.sel=null;
if(first.g===g){MU.matches++;bump('matchBest',1);setTimeout(muDraw,600);}
else{setTimeout(muDraw,600);}
}
function muFinish(){
var t=Math.floor((Date.now()-MU.start)/1000);bump('played');bump('matchFast',t<60?1:0);addXpBig(MU.matches*12);chk();
var html='<div class="card" style="text-align:center"><h3 style="margin-top:0">All matched</h3><div class="big">'+MU.moves+' moves</div><p class="mut">'+(t<60?'Quick!':'Solid work.')+'</p>';
html+='<div class="game-footer"><button class="btn" onclick="muClose()">Done</button></div></div>';
$('game').innerHTML=html;MU=null;
}

function blStart(){
if(!U){loginBox();return}
BL={qs:QUIZ.slice().sort(function(){return Math.random()-.5}),i:0,round:1,score:0,start:Date.now()};
$('modal').innerHTML='<div class="game-popup"><div class="game-header"><h2>Quiz Blaster</h2><button class="btn ghost" onclick="blClose()">Exit</button></div><div class="game-body" id="game"></div><div class="game-footer"></div></div>';blQ();}
function blClose(){BL=null;$('modal').innerHTML='';}
function blQ(){
if(BL.i>=BL.qs.length||BL.round>10){blOver();return}
var q=BL.qs[BL.i];var opts=q.o.map(function(o,j){return '<div class="opt" onclick="blFire('+j+')">'+o+'</div>'}).join('');
var elapsed=Math.floor((Date.now()-BL.start)/1000);
$('game').innerHTML='<div class="res">Round '+BL.round+' · Score '+BL.score+' · '+elapsed+'s</div><div class="card"><div class="mut" style="margin-bottom:10px">Q'+BL.round+': '+q.q+'</div>'+opts+'</div>';
}
function blFire(j){
var q=BL.qs[BL.i];var correct=j===q.a;
if(correct){BL.score+=100;addXp(3);blHit(true);}
else{loseXp(5);blHit(false);}
BL.i++;BL.round++;
}
function blHit(ok){
var b=$('game');setTimeout(function(){blQ()},700);
}
function blOver(){
bump('played');bump('blRounds',BL.round-1);best('blBest',BL.score);addXpBig(Math.floor(BL.score/5));chk();
var html='<div class="card" style="text-align:center"><h3 style="margin-top:0">Blast over</h3><div class="big">'+BL.score+' pts</div><p class="mut">'+BL.round-1+' rounds cleared.</p>';
html+='<div class="game-footer"><button class="btn" onclick="blClose()">Done</button></div></div>';
$('game').innerHTML=html;BL=null;
}
function gmStart(){
if(!U){loginBox();return}
GM={qs:ALLQ.slice().sort(function(){return Math.random()-.5}).slice(0,8),i:0,score:0,start:Date.now()};
$('modal').innerHTML='<div class="game-popup"><div class="game-header"><h2>Gem Match</h2><button class="btn ghost" onclick="gmClose()">Exit</button></div><div class="game-body" id="game"></div><div class="game-footer"></div></div>';gmDraw();}
function gmClose(){GM=null;$('modal').innerHTML='';}
function gmDraw(){
if(GM.i>=GM.qs.length){gmEnd();return}
var q=GM.qs[GM.i];var opts=q.o.map(function(o,j){return '<div class="opt" onclick="gmAns('+j+')">'+o+'</div>'}).join('');
var elapsed=Math.floor((Date.now()-GM.start)/1000);
$('game').innerHTML='<div class="res">Match '+GM.i+1+' · Score '+GM.score+' · '+elapsed+'s</div><div class="card"><div class="mut" style="margin-bottom:10px">'+q.q+'</div>'+opts+'</div>';
}
function gmAns(j){
var q=GM.qs[GM.i];var correct=j===q.a;
if(correct){GM.score+=120;addXp(3);bump('gemQ');}
else{loseXp(3);}
GM.i++;gmDraw();
}
function gmEnd(){
bump('played');best('gemBest',GM.score);addXpBig(Math.floor(GM.score/4));chk();
var html='<div class="card" style="text-align:center"><h3 style="margin-top:0">Gems collected</h3><div class="big">'+GM.score+' pts</div><p class="mut">'+GM.i+' matches answered.</p>';
html+='<div class="game-footer"><button class="btn" onclick="gmClose()">Done</button></div></div>';
$('game').innerHTML=html;GM=null;
}

async function loadFriends(){
if(!U)return;
var fr=await sb.from('friends').select('*').or('user_id.eq.'+U.id+',friend_id.eq.'+U.id);
var ids=[];(fr.data||[]).forEach(function(r){if(r.user_id!==U.id)ids.push(r.user_id);if(r.friend_id!==U.id)ids.push(r.friend_id)});
ids=ids.filter(function(v,i,a){return a.indexOf(v)===i});
var profs={};
if(ids.length){var pr=await sb.from('profiles').select('id,username,xp,avatar,avc,school,class_code,stats').in('id',ids);(pr.data||[]).forEach(function(p){profs[p.id]=p})}
U.friends=ids.map(function(id){var p=profs[id]||{};return{id:id,name:p.username||'?',xp:p.xp||0,av:Math.min(p.avatar||0,AVS.length-1),avc:p.avc||null}});
var ri=await sb.from('friend_req').select('*').eq('to_id',U.id).eq('status','pending');
U.reqIn=(ri.data||[]).map(function(r){return{id:r.id,from:r.from_id,name:r.from_name||'?',created:r.created_at}});
var ro=await sb.from('friend_req').select('*').eq('from_id',U.id).eq('status','pending');
U.reqOut=(ro.data||[]).map(function(r){return{id:r.id,to:r.to_id}});
}
async function addFr(){
var n=prompt('Friend username:');if(!n)return;
var f=await sb.from('profiles').select('id,username').eq('username',n).single();
if(f.error||!f.data){toast('User not found');return}
if(f.data.id===U.id){toast('That is you');return}
if(U.friends.some(function(x){return x.id===f.data.id})){toast('Already friends');return}
var ins=await sb.from('friend_req').insert({from_id:U.id,to_id:f.data.id,from_name:U.name});
if(ins.error){toast('Request already sent or failed');return}
toast('Request sent');loadFriends();chk();
}
async function acceptReq(id){
var r=await sb.from('friend_req').select('*').eq('id',id).single();
if(r.error||!r.data)return;
await sb.from('friend_req').update({status:'accepted'}).eq('id',id);
await sb.from('friends').insert([{user_id:U.id,friend_id:r.data.from_id},{user_id:r.data.from_id,friend_id:U.id}]);
loadFriends();chk();toast('Friend added');renderPage();
}
async function declineReq(id){await sb.from('friend_req').delete().eq('id',id);loadFriends();renderPage();}
async function rmFr(id){
await sb.from('friends').delete().or('user_id.eq.'+U.id+'.and.friend_id.eq.'+id+',user_id.eq.'+id+'.and.friend_id.eq.'+U.id);
loadFriends();chk();renderPage();
}
async function sendReq(){}
async function startDuel(){
if(!U){loginBox();return}
var f=U.friends[0];if(!f){toast('Add a friend first');return}
DG={opp:f,qs:ALLQ.slice().sort(function(){return Math.random()-.5}).slice(0,5),i:0,me:0,them:0,start:Date.now(),done:false};
$('modal').innerHTML='<div class="game-popup"><div class="game-header"><h2>Duel vs '+f.name+'</h2><button class="btn ghost" onclick="dgClose()">Exit</button></div><div class="game-body" id="game"></div><div class="game-footer"></div></div>';dgDraw();}
function dgClose(){DG=null;$('modal').innerHTML='';}
function dgDraw(){
if(DG.i>=DG.qs.length){dgEnd();return}
var q=DG.qs[DG.i];var opts=q.o.map(function(o,j){return '<div class="opt" onclick="dgAns('+j+')">'+o+'</div>'}).join('');
$('game').innerHTML='<div class="res">'+DG.opp.name+' · Q'+(DG.i+1)+' of 5 · You '+DG.me+' — Them '+DG.them+'</div><div class="card"><div class="mut" style="margin-bottom:10px">'+q.q+'</div>'+opts+'</div>';
}
function dgAns(j){
var q=DG.qs[DG.i];var correct=j===q.a;
if(correct){DG.me++;addXp(4);bump('q_duel_w');}else{loseXp(4);bump('q_duel_p');}
DG.i++;dgDraw();
}
function dgEnd(){
bump('played');bump('duels');if(DG.me>DG.them){bump('duelWins');U.wins++;toast('You won the duel')}
else{toast('Close match')}
chk();var html='<div class="card" style="text-align:center"><h3 style="margin-top:0">Duel over</h3><div class="big">'+DG.me+' — '+DG.them+'</div><p class="mut">'+(DG.me>DG.them?'Victory':'Better luck next time')+'</p>';
html+='<div class="game-footer"><button class="btn" onclick="dgClose()">Done</button></div></div>';
$('game').innerHTML=html;DG=null;
}
async function acceptDuel(id){}
async function loadDuels(){}
async function viewProfile(id){}

async function loadBoard(){
if(LB.loading)return;LB.loading=true;
var pr=await sb.from('profiles').select('id,username,xp,avatar,avc,school,class_code,stats').order('xp',{ascending:false}).limit(30);
LB.rows=(pr.data||[]).map(function(p,i){return{pos:i+1,id:p.id,name:p.username,xp:p.xp||0,av:Math.min(p.avatar||0,AVS.length-1),avc:p.avc||null,school:p.school||'',cls:p.class_code||''}});
LB.loading=false;renderPage();
}
async function loadFriendsBoard(){}
function viewProfile(id){var f=U.friends.find(function(x){return x.id===id});if(!f){var p=LB.rows.find(function(x){return x.id===id});if(p)f=p}
if(!f){toast('Profile not found');return}
$('modal').innerHTML='<div class="modal" onclick="if(event.target==this)closeM()"><div class="box"><button class="close-popup" onclick="closeM()">✕</button><h2>'+f.name+'</h2><div class="lane"><span>XP</span><div class="bar"><i style="width:'+Math.min(100,(f.xp%100))+'%"></i></div><span class="big">'+f.xp+'</span></div><div class="lane"><span>Level</span><div class="bar"><i style="width:100%"></i></div><span class="big">'+lvl()+'</span></div>'+av(56,f)+'<button class="btn ghost" onclick="rmFr(\''+id+'\')">Remove friend</button></div></div>';}
function ping(){}
async function startInbox(){}
function showInvite(){}

function goPage(r){route=r;history.pushState(null,'',r==='home'?'/':'/'+r);renderPage()}
function renderPage(){
var p=window.location.pathname.replace(/^\/+/,'').replace(/\/$/,'').replace(/\.html$/,'');
var map={'':'home','about':'why','stats':'stats','news':'news','dash':'dash','lib':'lib','games':'games','lb':'lb','me':'me','references':'refs','ref':'refs'};
if(!route||route==='home')route=map[p]||'home';
var m=$('main');if(!m)return;
switch(route){
 case 'home':m.innerHTML=homeHTML();break;
 case 'why':m.innerHTML=aboutHTML();break;
 case 'refs':m.innerHTML=refsHTML();break;
 case 'stats':m.innerHTML=statsHTML();break;
 case 'news':m.innerHTML=newsHTML();break;
 case 'dash':m.innerHTML=dashHTML();break;
 case 'lib':m.innerHTML=libHTML();break;
 case 'games':m.innerHTML=gamesHTML();break;
 case 'lb':m.innerHTML=lbHTML();break;
 case 'me':m.innerHTML=meHTML();break;
}
}
function shell(body){
return headerHTML()+'<main id="main">'+body+'</main>'+footerHTML();
}
function headerHTML(){
var logged=!!U;
return '<div class="top">'+
 '<div class="brand" onclick="goPage(\'home\')">'+
  '<img class="logo" src="https://github.com/AK9099080/Website20262027/blob/main/img/logo-home.png?raw=true" alt="AxonEDU logo">'+
  '<div class="wordmark">AxonEDU<em>AI</em></div>'+
 '</div>'+
 '<div class="auth-center">'+
  (logged?'<button class="btn ghost" onclick="logout()">Log out</button>':'<button class="btn" onclick="loginBox()">Log in / sign up</button>')+
 '</div>'+
 '<div class="main-nav">'+
  (logged?'<a class="navlink" onclick="goPage(\'me\')">'+av(32)+' <span style="margin-left:6px">'+U.name+'</span></a>':'')+
 '</div>'+
 '</div>'+
 '<div class="sub">'+
  '<a class="'+(route==='home'?'on':'')+'" onclick="goPage(\'home\')">Home</a>'+
  '<a class="'+(route==='lib'?'on':'')+'" onclick="goPage(\'lib\')">Lessons</a>'+
  '<a class="'+(route==='games'?'on':'')+'" onclick="goPage(\'games\')">Games</a>'+
  '<a class="'+(route==='lb'?'on':'')+'" onclick="goPage(\'lb\')">Leaderboard</a>'+
  '<a class="'+(route==='dash'?'on':'')+'" onclick="goPage(\'dash\')">Dashboard</a>'+
  '<a class="'+(route==='me'?'on':'')+'" onclick="goPage(\'me\')">Me</a>'+
  '<a class="'+(route==='news'?'on':'')+'" onclick="goPage(\'news\')">News</a>'+
  '<a class="'+(route==='refs'?'on':'')+'" onclick="goPage(\'refs\')">References</a>'+
 '</div>';
}
function footerHTML(){
return '<footer>'+
 '<div class="footer-links">'+
  '<a onclick="goPage(\'home\')">Home</a>'+
  '<a onclick="goPage(\'lib\')">Lessons</a>'+
  '<a onclick="goPage(\'games\')">Games</a>'+
  '<a onclick="goPage(\'lb\')">Leaderboard</a>'+
  '<a onclick="goPage(\'me\')">Me</a>'+
  '<a onclick="goPage(\'refs\')">References</a>'+
 '</div>'+
 '<p style="margin-top:8px">AxonEDU &mdash; AI education for students. Built for TSA 2026&ndash;27.</p>'+
 '</footer>';
}
function homeHTML(){
var logged=!!U;
var hero=logged?
 '<div class="hero-text">'+
  '<div class="eyebrow">Welcome back, '+U.name+'.</div>'+
  '<h1>Learn AI the right way.</h1>'+
  '<p>Lessons, games, and leaderboards built for students. Earn XP, collect badges, and level up&mdash;no filler, just real computer science.</p>'+
  '<button class="btn" onclick="goPage(\'lib\')">Start a lesson</button> <button class="btn ghost" onclick="goPage(\'games\')">Play a game</button>'+
 '</div>'+
 '<div><img src="img/hero.png" alt="Hero"></div>' :
 '<div class="hero-text">'+
  '<div class="eyebrow">AxonEDU &middot; AI Education</div>'+
  '<h1>Learn AI. Earn XP. Level up.</h1>'+
  '<p>Bubbly lessons, fast games, and a real leaderboard. Built for TSA 2026&ndash;27. Log in to save your progress.</p>'+
  '<button class="btn" onclick="loginBox()">Log in / sign up</button> <button class="btn ghost" onclick="goPage(\'lib\')">Browse lessons</button>'+
 '</div>'+
 '<div><img src="img/hero.png" alt="Hero"></div>';
var cta='<div class="cta">'+
 '<h2>Ready to level up?</h2>'+
 '<p>Join hundreds of students mastering AI with short lessons and head-to-head games.</p>'+
 '<button class="btn" onclick="'+(logged?'goPage(\'lib\')':'loginBox()')+'">'+(logged?'Continue learning':'Get started')+'</button>'+
 '</div>';
var about=logged?
 '<div class="about-box">'+
  '<h2>About us</h2>'+
  '<p>AxonEDU is built by students, for students. We believe the best way to learn AI is to use it&mdash;critically, honestly, and with plenty of practice.</p>'+
  '<p class="mut">Level '+lvl()+', '+U.xp+' XP. '+U.badges.length+' badges earned.</p>'+
 '</div>' :
 '<div class="about-box">'+
  '<h2>About us</h2>'+
  '<p>AxonEDU is an AI-education portal built for TSA 2026&ndash;27. Lessons cover what AI is, how it learns, ethics, generative AI, and smart prompt craft. Games turn practice into play.</p>'+
  '<p class="mut">Log in to track XP, badges, and your place on the leaderboard.</p>'+
 '</div>';
var stats='<div class="grid">';
STATS.forEach(function(s){stats+='<div class="card" style="text-align:center"><div class="big">'+s[0]+'</div><p style="margin:8px 0 2px">'+s[1]+'</p><p class="src">'+s[2]+'</p></div>'});
stats+='</div>';
return shell(hero+cta+stats+about);
}

function aboutHTML(){
var logged=!!U;
var who=logged?
 '<p>Hi, '+U.name+'. You&rsquo;re on level '+lvl()+' with '+U.xp+' XP and '+U.badges.length+' badges.</p>' :
 '<p>Log in to save your XP, badges, and lesson progress.</p>';
return shell(
 '<h2>About us</h2>'+
 '<div class="card">'+
  '<p>AxonEDU is an AI-education portal built for TSA 2026&ndash;27. It teaches what AI is, how it learns, where it fails, and how to use it honestly in school.</p>'+
  '<h3>What you&rsquo;ll find here</h3>'+
  '<ul>'+
   '<li><strong>Lessons:</strong> five modules&mdash;AI Basics, Practical AI Tools, Ethical AI Use, Generative AI, and Optimizing Your AI Use&mdash;each with short readings and a 3-question quiz.</li>'+
   '<li><strong>Games:</strong> Quiz Race, Flashcard Sprint, Match Up, Quiz Blaster, Gem Match, and friend duels. Wrong answers deduct XP (floored at zero).</li>'+
   '<li><strong>Leaderboard:</strong> rank up by earning XP and winning games.</li>'+
   '<li><strong>References:</strong> real sources behind every stat on this site.</li>'+
  '</ul>'+
  '<h3>Design</h3>'+
  '<p>Big bubbly cards, no AI-filler text, clean per-page URLs, and a level-10 custom gradient avatar you pick from a color wheel.</p>'+
 '</div>'+
 '<div class="about-box">'+
  '<h2>About us</h2>'+who+
  '<p class="mut">Built with vanilla HTML/CSS/JS, hosted on Cloudflare Pages via GitHub.</p>'+
 '</div>'
);
}
function refsHTML(){
var rows='';REFS.forEach(function(r){
rows+='<tr><td style="width:34%"><strong>'+r[0]+'</strong><br><span class="mut">'+r[1]+'</span></td>'+
 '<td><a href="'+r[2]+'" target="_blank" rel="noopener">'+r[2]+'</a></td>'+
 '<td class="mut">'+r[3]+'</td></tr>';
});
return shell(
 '<h2>References</h2>'+
 '<p class="mut">Every statistic and research claim on this site, with links to the original source.</p>'+
 '<table><thead><tr><th>Source</th><th>Link</th><th>What it says</th></tr></thead><tbody>'+rows+'</tbody></table>'+
 '<p class="mut" style="margin-top:14px">Pew Research Center data is from their teen AI-use surveys. IMF estimates global AI exposure. Dunlosky et al. reviewed learning techniques. Buolamwini & Gebru studied face-analysis bias. The U.S. Copyright Office addresses AI authorship.</p>'
);
}

function statsHTML(){
if(!U){loginBox();return ''}
var st=U.st||{};
return shell(
 '<h2>Your stats</h2>'+
 '<div class="grid">'+
  '<div class="card" style="text-align:center"><div class="big">'+st.raceWins+'</div><p class="mut">Quiz Race wins</p></div>'+
  '<div class="card" style="text-align:center"><div class="big">'+st.played+'</div><p class="mut">Games played</p></div>'+
  '<div class="card" style="text-align:center"><div class="big">'+st.fcDone+'</div><p class="mut">Flashcard decks cleared</p></div>'+
  '<div class="card" style="text-align:center"><div class="big">'+st.matchFast+'</div><p class="mut">Sub-60s Match Up wins</p></div>'+
  '<div class="card" style="text-align:center"><div class="big">'+st.blRounds+'</div><p class="mut">Quiz Blaster rounds</p></div>'+
  '<div class="card" style="text-align:center"><div class="big">'+st.gemBest+'</div><p class="mut">Best Gem Match score</p></div>'+
 '</div>'+
 '<p class="mut" style="margin-top:14px">XP is capped at 100 per cloud call; large awards are split automatically.</p>'
);
}
function newsHTML(){
var items='';NEWS.forEach(function(n){items+='<div class="card"><div class="mut" style="font-size:12px;text-transform:uppercase;letter-spacing:.1em">'+n[2]+'</div><h3 style="margin:8px 0 6px">'+n[0]+'</h3><p>'+n[1]+'</p></div>'});
return shell('<h2>News</h2>'+items);
}
function dashHTML(){
if(!U){loginBox();return ''}
var done=0,tot=0;MODS.forEach(function(m){var n=(U.done[m.id]||[]).length;done+=n;tot+=m.L.length});
var pct=tot?Math.round(done/tot*100):0;
var rows='';MODS.forEach(function(m){
var n=(U.done[m.id]||[]).length;var mp=Math.round((n/m.L.length)*100);
rows+='<div class="card"><div style="display:flex;justify-content:space-between;align-items:center"><div><h3 style="margin:0 0 4px">'+m.t+'</h3><p class="mut" style="margin:0">'+m.d+'</p></div><div class="mut" style="font-size:20px;font-weight:800">'+n+'/'+m.L.length+'</div></div>'+
 '<div class="bar"><i style="width:'+mp+'%"></i></div>'+
 '<div class="mut" style="font-size:12px;margin-top:4px">'+mp+'% complete</div>'+
 '</div>';
});
return shell(
 '<h2>Dashboard</h2>'+
 '<div class="grid">'+
  '<div class="card" style="text-align:center"><div class="big">'+U.xp+'</div><p class="mut">XP</p></div>'+
  '<div class="card" style="text-align:center"><div class="big">'+lvl()+'</div><p class="mut">Level</p></div>'+
  '<div class="card" style="text-align:center"><div class="big">'+U.badges.length+'</div><p class="mut">Badges</p></div>'+
  '<div class="card" style="text-align:center"><div class="big">'+pct+'%</div><p class="mut">Lessons done</p></div>'+
 '</div>'+
 '<h3 style="margin-top:26px">Lessons</h3>'+rows+
 '<p class="mut" style="margin-top:14px">Tap a module on the Lessons page to start reading.</p>'
);
}

function libHTML(){
var out='';MODS.forEach(function(m){
var n=(U.done[m.id]||[]).length;var pct=Math.round((n/m.L.length)*100);
var doneCls=n===m.L.length?'done ':'';
out+='<div class="card">'+
 '<div class="chip">'+m.ic+'</div>'+
 '<h3 style="margin:10px 0 6px">'+m.t+'</h3>'+
 '<p class="mut" style="margin-bottom:10px">'+m.d+'</p>'+
 tags(m)+
 '<div class="bar"><i style="width:'+pct+'%"></i></div>'+
 '<div class="mut" style="font-size:12px;margin-top:4px">'+n+'/'+m.L.length+' lessons &middot; '+pct+'%</div>'+
 '<button class="btn" style="margin-top:12px" onclick="modOpen(\''+m.id+'\')">'+(n===m.L.length?'Review':'Start')+' module</button>'+
 '</div>';
});
return shell('<h2>Lessons</h2><p class="mut" style="margin-bottom:14px">Read each module, take its 3-question quiz, and earn XP.</p><div class="grid">'+out+'</div>');
}
function modOpen(mid){
var m=MODS.find(function(x){return x.id===mid});if(!m)return;
var done=(U.done[mid]||[]);var pages='';m.L.forEach(function(le,i){
var isDone=done.indexOf(i)>=0;
pages+='<div class="card" style="margin:12px 0"><h3 style="margin:0 0 8px">'+le[0]+'</h3>'+
 le[1].map(function(p){return '<p>'+p+'</p>'}).join('')+
 '<div style="margin-top:12px"><button class="btn ghost" onclick="modQuiz(\''+mid+'\','+i+',\''+le[0]+'\')'+(isDone?' style="opacity:.5" disabled':'')+'">Quiz on this lesson</button>'+
 (isDone?' <span style="color:var(--ok)">✓ done</span>':'')+'</div></div>'});
$('modal').innerHTML='<div class="modal" onclick="if(event.target==this)closeM()"><div class="box" style="max-width:760px"><button class="close-popup" onclick="closeM()">✕</button>'+
 '<h2 style="margin-top:0">'+m.t+'</h2>'+pages+'</div></div>';
}
function modQuiz(mid,li,title){
var m=MODS.find(function(x){return x.id===mid});var ql=m.L[li][2];
var qi=0,score=0;
$('modal').innerHTML='<div class="modal" onclick="if(event.target==this)closeM()"><div class="box"><button class="close-popup" onclick="closeM()">✕</button>'+
 '<h2 style="margin-top:0">Quiz: '+title+'</h2><div id="mq"></div></div></div>';
mqDraw();
function mqDraw(){
if(qi>=ql.length){mqFinish();return}
var q=ql[qi];var opts=q.o.map(function(o,j){return '<div class="opt" onclick="mqAns('+j+')">'+o+'</div>'}).join('');
$('mq').innerHTML='<div class="card"><div class="mut" style="margin-bottom:10px">Q'+(qi+1)+' of '+ql.length+': '+q.q+'</div>'+opts+'</div>';
}
function mqAns(j){
var q=ql[qi];if(j===q.a){score++;}qi++;mqDraw();
}
function mqFinish(){
var pct=Math.round(score/ql.length*100);var done=(U.done[mid]||[]);
if(done.indexOf(li)<0){done.push(li);U.done[mid]=done;saveProg(mid);addXp(20);if(score===ql.length)bump('perfect');chk();}
$('mq').innerHTML='<div class="card" style="text-align:center"><h3 style="margin-top:0">Quiz done</h3><div class="big">'+score+' / '+ql.length+'</div><p class="mut">'+pct+'% &middot; +20 XP</p></div>';
setTimeout(closeM,1200);
}
}
function gamesHTML(){
return shell(
 '<h2>Games</h2>'+
 '<p class="mut" style="margin-bottom:14px">Full-screen popups with exit buttons. Wrong answers lose XP, floored at zero.</p>'+
 '<div class="grid">'+
  '<div class="card"><h3 style="margin-top:0">Quiz Race</h3><p class="mut">10 questions, fastest correct streak wins.</p><button class="btn" onclick="quizStart()">Play</button></div>'+
  '<div class="card"><h3 style="margin-top:0">Flashcard Sprint</h3><p class="mut">Answer cards before time runs out.</p><button class="btn" onclick="fcStart()">Play</button></div>'+
  '<div class="card"><h3 style="margin-top:0">Match Up</h3><p class="mut">Match terms to definitions.</p><button class="btn" onclick="muStart()">Play</button></div>'+
  '<div class="card"><h3 style="margin-top:0">Quiz Blaster</h3><p class="mut">Rapid-fire rounds until you miss.</p><button class="btn" onclick="blStart()">Play</button></div>'+
  '<div class="card"><h3 style="margin-top:0">Gem Match</h3><p class="mut">Answer to collect gems.</p><button class="btn" onclick="gmStart()">Play</button></div>'+
  (U?'<div class="card"><h3 style="margin-top:0">Friend Duel</h3><p class="mut">Challenge a friend to 5 questions.</p><button class="btn" onclick="startDuel()">Play</button></div>':'<div class="card"><h3 style="margin-top:0">Friend Duel</h3><p class="mut">Log in and add a friend to duel.</p></div>')+
 '</div>'
);
}

function lbHTML(){
var rows='';LB.rows.forEach(function(r){
var meClass=r.id===U.id?'style="background:color-mix(in srgb, var(--pri2) 12%, transparent)"':'';
rows+='<tr '+meClass+'><td>'+r.pos+'</td><td>'+av(28,r)+' <b>'+r.name+'</b></td><td class="big">'+r.xp+'</td></tr>';
});
return shell(
 '<h2>Leaderboard</h2>'+
 '<p class="mut" style="margin-bottom:14px">Top players by XP.</p>'+
 '<table><thead><tr><th>#</th><th>Player</th><th>XP</th></tr></thead><tbody>'+rows+'</tbody></table>'+
 (U?'<p class="mut" style="margin-top:10px">You are #'+(LB.rows.findIndex(function(x){return x.id===U.id})+1)+' with '+U.xp+' XP.</p>':'')+
 '<p class="mut" style="margin-top:10px">Refresh to reload the board.</p>'
);
}
function meHTML(){
if(!U){loginBox();return ''}
var grad='';if(U.av===7 && U.avc){var m=U.avc.match(/^#([0-9a-f]{6}),#([0-9a-f]{6})$/i);if(m)grad='background:linear-gradient(135deg,#'+m[1]+',#'+m[2]+')'}
var badgeHtml='';BADGES.forEach(function(b){var got=U.badges.indexOf(b[0])>=0;badgeHtml+='<div class="badge '+(got?'':'lock')+'"><b style="'+(got&&b[0]==='lvl10'?'background:var(--lvl10)!important':grad||'')+'">'+b[1]+'</b>'+b[2]+(got?' <span style="color:var(--ok)">✓</span>':'')+'</div>'});
return shell(
 '<h2>Me</h2>'+
 '<div class="grid">'+
  '<div class="card" style="text-align:center">'+
   '<div style="font-size:70px">'+av(96)+'</div>'+
   '<h2 style="margin:10px 0 4px">'+U.name+'</h2>'+
   '<p class="mut">Level '+lvl()+' &middot; '+U.xp+' XP</p>'+
   '<div class="bar" style="margin-top:8px"><i style="width:'+(U.xp%100)+'%"></i></div>'+
  '</div>'+
  '<div class="card" style="text-align:center">'+
   '<h3>Avatar</h3>'+
   '<p class="mut" style="margin-bottom:10px">Pick a gradient. Level 10 unlocks a custom two-color wheel.</p>'+
   AVS.map(function(a,i){var sel=i===U.av;return'<div class="pill '+(sel?'on':'')+'" style="'+(i===7?'':'background:linear-gradient(135deg,'+a[0]+')')+'" onclick="setAv('+i+')">'+a[1]+' (L'+a[2]+')'+(sel?' ✓':'')+'</div>'}).join('')+
   (lvl()>=10?('<div style="margin-top:14px"><input type="text" id="c1" placeholder="#HEX1"> <input type="text" id="c2" placeholder="#HEX2"> <button class="btn" onclick="setAvColor($(\'c1\').value,$(\'c2\').value)">Custom gradient</button></div>'):'<p class="mut" style="font-size:12px">Reach level 10 for a custom color wheel.</p>')+
  '</div>'+
 '</div>'+
 '<h3 style="margin-top:26px">Badges</h3><div class="grid">'+badgeHtml+'</div>'+
 '<h3 style="margin-top:26px">School &amp; class</h3>'+
 '<div class="card">'+
  '<input type="text" id="sch" placeholder="School" value="'+U.school+'">'+
  '<input type="text" id="cls" placeholder="Class code" value="'+U.cls+'">'+
  '<button class="btn" style="margin-top:10px" onclick="saveSet()">Save</button>'+
 '</div>'+
 '<h3 style="margin-top:26px">Friends</h3>'+
 '<div class="card">'+
  '<div style="display:flex;gap:8px;margin-bottom:10px"><input type="text" id="fr" placeholder="Username"><button class="btn" onclick="addFr()">Add friend</button></div>'+
  '<div id="frlist">'+U.friends.map(function(f){return'<div class="lane">'+av(28,f)+' <span style="flex:1">'+f.name+'</span><span class="big">'+f.xp+' XP</span> <button class="btn ghost" onclick="rmFr(\''+f.id+'\')">Remove</button></div>'}).join('')+'</div>'+
 '</div>'
);
}
window.addEventListener('popstate',renderPage);
init();
