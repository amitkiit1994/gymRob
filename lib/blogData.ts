// Blog data with slugs for individual pages
export interface BlogPost {
  slug: string
  title: string
  content: string
  date?: string
  hasImage?: boolean
  excerpt?: string
}

// Helper to create slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Featured blog posts
export const featuredBlogs: BlogPost[] = [
  {
    slug: "rebuilding-after-40",
    title: "From 120 to 78: How I Rebuilt My Body After 40 (and Why \"It's Too Late\" Is a Myth)",
    content: `Hi, I'm Robin.

For almost 30 years, I worked in advertising. If you know that world, you know the lifestyle that often comes with it: late hours, high stress, constant socializing, and a version of "living" that looks fun from the outside—but quietly drains you over time.

Mine did.

It was hedonistic in the way only that industry can be—smoking, alcohol, late nights, consumption. And without even realizing it, I went from being someone who played a lot of sports in college to someone who was… simply unfit. Not just out of shape—out of rhythm with my own body.

At my worst, I weighed 120 kilos.

And honestly, what was worse than the weight was what came with it: low energy, low confidence, and a sense that the best version of me was behind me.

The Day I Decided to Start Again

The turning point wasn't dramatic. It was simple: I decided I had to get back to some kind of fitness—any kind—because whatever I was doing wasn't sustainable.

So I joined a gym called Fitness First and started my journey there.

No shortcuts. No magic plan. Just showing up.

And here's what happened:

In about 7–8 months, I went from 120 kg to 78 kg.

That didn't happen because I discovered a secret. It happened because I changed the foundations of my life.
• I quit smoking completely. It's been 15–16 years since I last touched a cigarette.
• I gave up drinking entirely for a long stretch. Today, I drink occasionally, but the old lifestyle is gone.
• I stayed consistent through the slow days—the days when motivation wasn't there.

Progress Changed Everything

At first, it felt like I was climbing out of a pit. My confidence was at an all-time low when I started. But as the weight came off and my body started responding, something else began to return:
• self-respect
• mental clarity
• emotional strength
• the belief that I could actually change my life

The results were heartening—not because they were fast, but because they were real.

It was a slow process. But it was a process.

And once you feel progress, you want more of it. You lean in. You learn. You commit again.

That's when "getting fit" stopped being a phase and became a transformation.

The Part Nobody Talks About: The Real Transformation Happened After 40

Here's the truth that surprises most people:

The fat loss was just the beginning.

The deeper transformation—building muscle, strength, and a genuinely healthy lifestyle—happened post 40. Over the next 2 to 2.5 years, I didn't just maintain a slimmer body. I built a stronger one.

And this is where I want to challenge the biggest myth I keep hearing:

"It's impossible to build muscle after 40."

That's not a fact. That's fear dressed up as "common sense."

Yes, your body changes as you age. Recovery matters more. Consistency matters more. You have to train smarter. But the idea that your body becomes incapable of change after 40 is simply wrong.

I'm not speaking from theory. I'm speaking from lived reality.

I rebuilt myself. And I did it when most people say it can't be done.

Why Fitness Became More Than Personal

At some point, I looked at what fitness had done for me—and I felt something bigger than satisfaction.

I felt gratitude.

Fitness didn't just give me a body back. It gave me me back.

And I thought: If something can change my life this deeply, I owe it respect. I owe it effort. I owe it something back.

So I decided to give back to the fitness industry in whatever way I could.

That meant getting serious—not just training, but learning.

Becoming Certified: Turning Passion Into Purpose

I went and earned the qualifications to stand on solid ground:
• A Personal Training Certification
• Sports Medicine Rehabilitation
• A separate course in Strength & Conditioning, Speed & Agility from the American School of Conditioning and Muscle

These are the same guys who train elite athletes—including Notre Dame football players—so the standard is high, the knowledge is real, and the work is serious.

I earned my grades, completed my certifications, and in 2022, I renewed my certification successfully.

This wasn't a hobby. It was a commitment.

The Next Step: Owning a Gym

And then came the obvious question:

What do I do with everything I've learned—and everything I've lived?

The next step became clear.

I want to own a gym.

Not just a space filled with machines, but a place that gives people what fitness gave me:
• a second start
• confidence when it's at its lowest
• a system that works when motivation doesn't
• proof that the "too late" story is a lie

Because I know what it takes.

I know the emotional battle.
I know the mental resistance.
I know the self-doubt.
And I also know what happens when you push through: the self-confidence comes back, the identity shifts, and your life starts to look different.

What I Want You to Take From This (Especially If You're Over 40)

If you're reading this thinking, "I'm too old to change," I'll say this clearly:

You're not too old. You're just not started yet.

Muscle after 40 isn't impossible.
Transformation after 40 isn't rare.
It's just harder to believe—because we've been told the wrong story for too long.

Fifteen years ago, I changed my life.
Post 40, I strengthened it.

And this is just the beginning.`,
    hasImage: true,
    date: "2026"
  },
  {
    slug: "im-a-trainer-not-an-influencer",
    title: "I'm a Personal Trainer. Not an Influencer.",
    content: `I'm a personal trainer.
Not an influencer. Not a cheerleader.
Not a content creator or blogger on YouTube.
And definitely not "just a trainer."

My workday starts before your alarm
and ends after your motivation disappears.
I rearrange my life around your schedule.
Early mornings. Late nights.
Because flexibility is part of the job—apparently.

Sessions get cancelled last minute.
People turn up late.
Some don't turn up at all.
And that's normal.

But here's what's really funny:
People will spend ₹10,000 in one night at a bar or nightclub without thinking twice.
No bargaining. No questions. No guilt.
But when it comes to the gym?
"Can you reduce your fees?"
"Just for me."
"Other trainers charge less."

That tells you exactly where a trainer stands.

I'm not selling workouts.
I'm teaching you how not to wreck your body.
How to move properly.
How to train around injuries.
How to build habits that last longer than your motivation.

If I get it wrong, you get injured.
If I'm careless, you're out for months.
So no—this isn't guesswork.

On the gym floor, you think you're building muscles.

What you're actually building is discipline.

You learn to show up.
You learn patience.
You learn consistency.

Funny thing—those lessons don't stay in the gym.

So the next time you say,
"He's just a trainer,"

remember this:

I'll still be here
when motivation disappears
and excuses sound convincing.

And that's worth more than a hangover.

— Robin Carruthers`,
    hasImage: false,
    date: "2026"
  },
  {
    slug: "i-am-a-warrior",
    title: "I am a Warrior",
    date: "February 7, 2026",
    hasImage: false,
    content: `I am a Warrior
My choices are seen as extreme
My ability at times defying nature
Yet my life is characterised
By near constant disappointment
In my efforts to build a foundation for later success

To be a worthy representative of myself
I must know defeat and humble myself to its teachings
Continuously i must test..and test…and test..and test my limits again

For in this testing lies the answer to the question
"How will I be better tomorrow"?

Fear and Ego will stop many as they mistake failure for weakness
But it is precisely through this failure that i come to understand
What is possible, what i can truly be and who i truly am

For me Iron is a religion and I am defined by its teachings

It teaches humility and patience and focus and power and brotherhood

When i walk into the temple I am prepared to fail,
i am prepared to fall, I am prepared to look small,
I am prepared to leave my ego and pride at the entrance

But also I am prepared to never quit, to not give up,
to never say "I can't do it"

I am prepared to go that last rep when my body says no more,
I am prepared to go through pain and to focus when my brain is blacking out,
I am prepared to win – because that is what will define
me being better tomorrow than i was today !!

I am a warrior!

— Robin Carruthers`
  }
]

// Other blog posts
export const otherBlogs: BlogPost[] = [
  {
    slug: createSlug("The Art of being FUNCTIONAL"),
    title: "The Art of being FUNCTIONAL",
    date: "Friday, September 6, 2019",
    content: `A Loud shout out to all ...today I felt I should write and share my thoughts on a catch word we have been hearing about for a while now : FUNCTIONAL TRAINING ! 
At the risk of probably getting shot at I think it's necessary that we dispel a few myths that surround this form of training.
First and foremost FUNCTIONAL TRAINING is exactly that - a training system put together to help in using our limbs and bodies to carry out daily basic functions! As simple as that ! Why? You may ask, don't we regular human beings do that anyway? Yes of course we do! Then why functional training to help in this ? 
THE ANSWER MY FRIENDS, IS FUNCTIONAL TRAINING IS SPECIFICALLY A FORM OF REHABILITATION TRAINING TO BE PERFORMED BY QUALIFIED PHYSICAL THERAPISTS TO HELP IN RESTORING FUNCTIONS OF A LIMB OR LEG OR NECK OR SPINE OR KNEE OR ANY OTHER PART OF A HUMAN BODY THAT NEEDS A RESTORATIVE PROCESS POST TRAUMA OR INJURY. 
I have seen various forms of exercise varying from swinging on bars, to jumping on body balls, to moving a sandbag in unnatural circles overhead' to balancing on balls with one leg and trying to attempt a pistol squat, to crawling like various animals and the list goes on. 
It's laughable how this is dished out as FUNCTIONAL TRAINING! Not only is this highly injury prone but it is unnatural and most times goes against a human body's natural biomechanics.
Let me ask the Pundits of fitness who are so quick to point out flaws in a regular squat - your heel is lifting off the floor, your back is bending way too forward, your back isn't arched, your spine is bending, your chest is caving in etc. All too often I have heard these observations and they are perfectly correct. My point is now when the same Pundits make a client perform a squat, lunge, pistol squat etc. I'd really like to see the client they are training perform these actions keeping in mind the commandments of a correct squat form
Again I have heard and seen FUNCTIONAL FITNESS being used as a sports based training theory! An unsuspecting member / client is holding a metal rod attached to a resistance band / cable and is being exhorted to play cricket strokes with the intent of strengthning his arms or bringing to his body EXPLOSIVE MOMEMENT!! For a second imagine you doing this - if you have ever played the sport of cricket you would immediately know that your stroke making with this sort of technique would be total crap and you would probably stress your elbow, wrist and shoulders ! Now bring into this scenario a cricket bat and replace the pole/ rod with the bat and perform the same EXPLOSIVE MOMEMENT STROKES ...chances are you will look like a total clown! 
Animal movements ...Wow...now this is just stupefying ! My first question being man evolved from crawling to ape like movements to being HOMO ERECTUS which means standing upright on two legs ! Nature did this for a reason people, why then are we fooling ourselves by doing animal movements in the name of fitness and functional training. Maybe some of these movements strengthen some muscles but they come with their share of injury to other body parts and there are a multitude of ways to strengthen those muscles other than crawl around a gym ! 
Coming to a few other movements, battle rope, Tyre flips, hammer, etc. Ask people why these are done and the answer you get is "its functional movement" yes it is but from where and how is this applicable in our daily air conditioned lives ? 
The answer to this friends is that these movements are actual adaptions to what our fore father's did in their daily activity 
Battle rope - beating or threshing of corn
Plough - easy enough to understand , pushing the yoke
Tyre Flips - Rolling heavy objects or stones
Farmers Walk - carrying heavy loads in each hand and walking to destination.
Hammer Strikes - again easy enough to understand, breaking of stones or rocks
So you see people there is a clear explanation for FUNCTIONAL TRAINING :
MEDICALLY
1) TO REGAIN FUNCTION AND MOBILITY OF A CERTAIN BODY PART THAT HAS BEEN INJURED
TRAINING AND EXERCISE
2) TO REPLICATE EARLY MAN MOVEMENTS TO STRENGTHEN BODY PARTS 
Now I know many may rubbish my view points or not agree and that is because of the fact that they have been taught to believe otherwise. Also the fact that nobody likes to be told they have been futile in their training efforts. That's okay because it's perfectly fine to agree to disagree .
I am not overtly worried whether you are right but point out to me where I am wrong!
Happy reading folks and oh yes beware of those injuries and animal walks. If you do notice in all the videos you see, all of these actions are being performed by extremely fit people, why then are these FUNCTIONAL MOVEMENTS being administered to most people who have just joined a gym, particularly women? 
Next time the myths on cardio and treadmill and the like!
Till then stay fit stay strong stay healthy`
  },
  {
    slug: createSlug("Weight Loss vs Fat Loss - the truth"),
    title: "Weight Loss vs Fat Loss - the truth",
    date: "Monday, September 2, 2019",
    content: `Hi Peeps....today when at the gym I happened to overhear a client asking a trainer if she could help her with weight loss, the trainer of course said yes and am sure he can because "weight loss" is the easiest thing in the world.
I keep wondering why people ask for weight loss and not FAT LOSS.
With weight loss you also lose muscle thereby at the end of your weight loss program you may not look the way you thought you would! In fact you could also end up looking ill (believe me I've seen this on more than one occasion)
In a weight loss program you may lose 10 kilograms of bodyweight but you'd be surprised to know that your overall body fat percentage may be unchanged or may have gone down by a fraction. Then you ask yourself why?
However if you focus on FAT LOSS you not only will look good but you will not hamper Muscle Growth. In this scenario your FAT Percentage will drop without interfering with your muscle mass.
Why is it so important to not lose muscle while losing weight...well the answer (go back to biology classes)lies in the fact that our muscles have little fat burning powerhouses called MITOCHONDRIA. These powerhouses are responsible for for the production of energy cells in our bodies and so the more the muscle mass the more MITOCHONDRIA and hence the more the body ability to burn fat and use it as energy.
Cut to chase ....in order to keep the fat off you need to increase your muscle mass and not lose it.
So beware what you ask for ..Weight loss isn't what you want, its FAT that you want to lose
Now that we have got that clear I want to highlight another type of fat we carry ....a far more volatile and dangerous Fat and a fat that not many people pay heed to or talk about.
VISCERAL FAT - this is fat stored in our abdominal cavities and therefore also tend to surround the organs in our abdominal cavity! Liver, kidneys, pancreas, intestines are all at high risk with this storage of fat. Type 2 Diabetes, Cardiac arrests, insulin resistance etc are all life threatening conditions that arise out of this condition. 
However what I see quite often is people getting off the measurement scale and perplexed at the fact that while their report shows a drop in fat percentage their overall body fat has changed only marginally. This of course is due to the high percentage of Visceral Fat they continue to carry. The more dangerous FAT. 
The good news is Visceral Fat is extremely responsive to any form of exercise and nearly not as stubborn at the cosmetic Subcutaneous Fat. So good diet and exercise can help you reduce visceral fat much faster than subcutaneous fat.
However to sum this up people remember ;
Cardio is not the answer to burning fat - cardio helps you lose overall body weight including muscle. Cardio helps your heart perform better.
In order to lose fat effectively and keep it off you need to build your muscle mass which in turn will produce more of those little powerhouses called mitochondria which again uses fat to produce energy.
Weight training & resistance training helps to build muscle not cardio and in this form of training there are various ways to implement them for the best results on an individual body.
I know there may be some who will continue to think that Cardio is the Holy Grail when it comes to losing fat but they will soon learn it isn't, just like I did on my journey from Fat to Fit.
So Myth cardio is the best form of exercise to burn fat is exactly that ...just a Myth!`
  },
  {
    slug: createSlug("The Art of Stretching things"),
    title: "The Art of Stretching things",
    date: "Wednesday, November 6, 2019",
    content: `To Stretch or not to Stretch ?

Exactly my point ...this is what I have said for the longest time ...not that I knew the science but just by pure practical thinking ...this stretching to warm up the body is a myth ...if stretching warms up the muscle and increases blood flow then so does contraction ...isn't it ..think about it ....also stretching leading to flexibility is a wrong notion ...your muscles are like elastic and designed  to expand and as well as contract ...now please understand this ...every muscle in our body is attached to our skeletal system but ligaments and tendons ...for increased flexibility we need our joints to be flexible not the muscle ...the muscle will stretch on its own...else how do you explain a growing child ..do 4 and 5 year old kids go through a rigorous stretching routine ? No they don't ..but yet they grow ..their skeletal frames grow and the muscles automatically grow too ...think about this guys ..where do each of you get maximum injuries ...the joints right ? Lower back, elbow, shoulder , wrist etc . These are chronic, painful and recurring ...this is due to a joint and not the muscle ..yes at times you could have a sore muscle and that may be due to an injury to the muscle itself ...the muscle in our bodies are made up of millions of cells called capillaries..it's is into these capillaries that blood is pumped ...when we train  the continous contraction and retraction pumps blood into these capillaries till lactic acid is formed ..we call it "the pump" that we get in the gym..this continous process makes the capillaries burst ..when this happens we feel sore ..this then repairs itself and the soreness goes ..similarly when a muscle is damaged due to an external force it could bruise the structure of the muscle and cause blood clots or damaged capillaries which leads to pain ..this will eventually go because the muscle will repair itslef ...the injuries that actually don't go away are the joint injuries ...so now I leave it to you guys to think practically .

Can any of you do a better squat or a deadlift or a shoulder press post stretching and without stretching ...my guess is it will be the same weight you would be able to push .right ? So where is the benefit . Now to further strengthen my argument ..guys most injuries take place in any sport well into 15 to 45 mins Into the activity ...when your body has "warmed up" anyways ...so that being the case then stretching claiming to help reduce injury or increase flexibility is just bro science or grandmother's fairy tales or like I would call it ..a simple case of  blissful ignorance`
  }
]

// Get all blog posts
export const allBlogs: BlogPost[] = [...featuredBlogs, ...otherBlogs]

// Get blog post by slug
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return allBlogs.find(blog => blog.slug === slug)
}

// Get all blog slugs for static generation
export function getAllBlogSlugs(): string[] {
  return allBlogs.map(blog => blog.slug)
}

