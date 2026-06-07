// Hyper-Typer Ty
// Event Listeners
document.getElementById("start-btn").addEventListener("click", Start);
document.getElementById("next-btn").addEventListener("click", Start); 
document.getElementById("quote-input").addEventListener("input", Type);

// Global Variables
let charactersTypedCount = 0; 
let totalMistakeCount = 0; 
let gameIsPlaying = 0;  
let startTime;      
let gameTimerInstance;      
let activeQuoteText = "";
let completedQuotesCount = 1; 

function Start() {
  // Reset numbers
  charactersTypedCount = 0;
  totalMistakeCount = 0;
  gameIsPlaying = 1;

  // Pick a random number from 1 to 100
  let randomNumber = Math.floor(Math.random() * 500) + 1;

  // Choose the text box phrase - 100 Quotes
  if (randomNumber === 1) {
    activeQuoteText = "The true standard of success is that you can breathe easily and smile often, no matter what happens around you.";
  }
  else if (randomNumber === 2) {
    activeQuoteText = "Do not go where the path may lead, go instead where there is no path and leave a trail.";
  }
  else if (randomNumber === 3) {
    activeQuoteText = "Our lives begin to end the day we become silent about things that matter.";
  }
  else if (randomNumber === 4) {
    activeQuoteText = "In the midst of winter, I found there was, within me, an invincible summer. And that makes me happy.";
  }
  else if (randomNumber === 5) {
    activeQuoteText = "The only way to look at a trouble is to look at it as an adventure. Look at it any other way and you will be overwhelmed.";
  } 
  else if (randomNumber === 6) {
    activeQuoteText = "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.";
  } 
  else if (randomNumber === 7) {
    activeQuoteText = "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.";
  }
  else if (randomNumber === 8) {
    activeQuoteText = "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.";
  }
  else if (randomNumber === 9) {
    activeQuoteText = "Success is not final, failure is not fatal: it is the courage to continue that counts.";
  }
  else if (randomNumber === 10) {
    activeQuoteText = "Do not pray for an easy life, pray for the strength to endure a difficult one.";
  }
  else if (randomNumber === 11) {
    activeQuoteText = "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.";
  }
  else if (randomNumber === 12) {
    activeQuoteText = "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.";
  }
  else if (randomNumber === 13) {
    activeQuoteText = "The true standard of success is that you can breathe easily and smile often, no matter what happens around you.";
  }   
  else if (randomNumber === 14) {
    activeQuoteText = "For what it's worth: it's never too late to be whoever you want to be. There's no time limit, stop whenever you want.";
  }
  else if (randomNumber === 15) {
    activeQuoteText = "The push and pull of life will always be there, but your peace depends entirely on how you ride the waves.";
  }
  else if (randomNumber === 16) {
    activeQuoteText = "You may not control all the events that happen to you, but you can decide not to be reduced by them.";
  }
  else if (randomNumber === 17) {
    activeQuoteText = "Sometimes you have to step outside of the person you've been, and look at the person you want to become, to find your path.";
  }
  else if (randomNumber === 18) {
    activeQuoteText = "You don't have to see the whole staircase, just take the first step with confidence and let the rest reveal itself over time.";
  }
  else if (randomNumber === 19) {
    activeQuoteText = "The most beautiful things in the world cannot be seen or even touched, they must be felt deeply with the heart.";
  }
  else if (randomNumber === 20) {
    activeQuoteText = "We cannot choose our external circumstances, but we can always choose how we respond to them and who we become through them.";
  }
  else if (randomNumber === 21) {
    activeQuoteText = "You are not defined by the opinions of people who do not know your heart or the weight of the burdens you carry.";
  }
  else if (randomNumber === 22) {
    activeQuoteText = "Do not let the behavior of others destroy your inner peace; your serenity is far too valuable to surrender to anyone else.";
  }
  else if (randomNumber === 23) {
    activeQuoteText = "The only way to make sense out of change is to plunge into it, move with it, and join the dance instead of resisting.";
  }
  else if (randomNumber === 24) {
    activeQuoteText = "Life is a balance of holding on and letting go, and knowing exactly when to do which is the ultimate wisdom.";
  }
  else if (randomNumber === 25) {
    activeQuoteText = "You cannot swim for new horizons until you have the courage to lose sight of the shore for a very long time.";
  }
  else if (randomNumber === 26) {
    activeQuoteText = "The privilege of a lifetime is to become who you truly are, stripping away the expectations the world forced upon you.";
  }
  else if (randomNumber === 27) {
    activeQuoteText = "When the world says 'give up,' hope whispers in your ear to try it just one more time before you walk away.";
  }
  else if (randomNumber === 28) {
    activeQuoteText = "It does not matter how slowly you go as long as you do not stop moving toward the life you want to build.";
  }
  else if (randomNumber === 29) {
    activeQuoteText = "The oak fought the wind and was broken, the willow bent when it must and survived to see the bright morning sun.";
  }
  else if (randomNumber === 30) {
    activeQuoteText = "Out of suffering have emerged the strongest souls; the most massive characters in this world are seared with scars of survival.";
  }
  else if (randomNumber === 31) {
    activeQuoteText = "You are stronger than you know, braver than you think, and loved more than you could ever possibly imagine or comprehend.";
  }
  else if (randomNumber === 32) {
    activeQuoteText = "Do not count the days of your trial, make the days count by learning the lessons that pain is trying to teach you.";
  }
  else if (randomNumber === 33) {
    activeQuoteText = "The gem cannot be polished without friction, nor man perfected without trials and the sharp edges of difficult experiences.";
  }
  else if (randomNumber === 34) {
    activeQuoteText = "You must be willing to let go of the life you planned so as to have the life that is waiting for you.";
  }
  else if (randomNumber === 35) {
    activeQuoteText = "Hardships often prepare ordinary people for an extraordinary destiny they never could have seen coming or planned for themselves.";
  }
  else if (randomNumber === 36) {
    activeQuoteText = "The turn of the road is not the end of the road, unless you fail to make the turn and choose to stop.";
  }
  else if (randomNumber === 37) {
    activeQuoteText = "If you want to live a happy life, tie it to a goal, not to people or things that can change overnight.";
  }
  else if (randomNumber === 38) {
    activeQuoteText = "The horizon leans forward, offering you space to place new steps of change, if you only have the courage to move.";
  }
  else if (randomNumber === 39) {
    activeQuoteText = "Do not wait for extraordinary circumstances to do good actions; use ordinary situations and make them grand through your effort.";
  }
  else if (randomNumber === 40) {
    activeQuoteText = "The best time to plant a tree was twenty years ago, but the second best time to plant that tree is right now.";
  }
  else if (randomNumber === 41) {
    activeQuoteText = "You build on failure, you use it as a stepping stone, and you close the door on the past without looking back.";
  }
  else if (randomNumber === 42) {
    activeQuoteText = "Do not fear failure so much that you refuse to try new things; the saddest summary of life contains three descriptions: might have, could have, should have.";
  }
  else if (randomNumber === 43) {
    activeQuoteText = "Nothing in the world can take the place of persistence; talent, genius, and education mean nothing without the drive to use them.";
  }
  else if (randomNumber === 44) {
    activeQuoteText = "The dictionary is the only place where success comes before work; hard effort is the price we must pay for achievement.";
  }
  else if (randomNumber === 45) {
    activeQuoteText = "Your talent is God's gift to you; what you do with it is your gift back to the world and your legacy.";
  }
  else if (randomNumber === 46) {
    activeQuoteText = "If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced.";
  }
  else if (randomNumber === 47) {
    activeQuoteText = "The ultimate measure of your intelligence is your ability to change your mind when presented with new facts and deeper truths.";
  }
  else if (randomNumber === 48) {
    activeQuoteText = "We are what we repeatedly do; excellence, then, is not an isolated act but a habit practiced every single day of our lives.";
  }
  else if (randomNumber === 49) {
    activeQuoteText = "The most difficult thing is the decision to act, the rest is merely tenacity and refusing to let distractions pull you down.";
  }
  else if (randomNumber === 50) {
    activeQuoteText = "Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you sit down quietly, may alight upon you.";
  }
  else if (randomNumber === 51) {
    activeQuoteText = "A person who never made a mistake never tried anything new; errors are simply the proof that you are trying to grow.";
  }
  else if (randomNumber === 52) {
    activeQuoteText = "The foolish man seeks happiness in the distance, while the wise man grows it directly under his own two feet.";
  }
  else if (randomNumber === 53) {
    activeQuoteText = "Kindness is the language which the deaf can hear and the blind can see; it costs nothing but changes everything it touches.";
  }
  else if (randomNumber === 54) {
    activeQuoteText = "Do not judge each day by the harvest you reap but by the seeds that you plant into the soil of your life.";
  }
  else if (randomNumber === 55) {
    activeQuoteText = "Peace comes from within, do not waste your time and energy searching for it outside in the chaos of the world.";
  }
  else if (randomNumber === 56) {
    activeQuoteText = "To love oneself is the beginning of a lifelong romance that requires patience, forgiveness, and endless understanding along the way.";
  }
  else if (randomNumber === 57) {
    activeQuoteText = "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.";
  }
  else if (randomNumber === 58) {
    activeQuoteText = "A real friend is one who walks in when the rest of the world walks out on you in your darkest hour.";
  }
  else if (randomNumber === 59) {
    activeQuoteText = "The greatest thing you'll ever learn is just to love and be loved in return without fear or reservation.";
  }
  else if (randomNumber === 60) {
    activeQuoteText = "We are all travelers in the wilderness of this world, and the best we can find in our travels is an honest friend.";
  }
  else if (randomNumber === 61) {
    activeQuoteText = "No road is long with good company by your side to share the weight of the journey and the joy of the scenery.";
  }
  else if (randomNumber === 62) {
    activeQuoteText = "To be brave is to love someone unconditionally, without expecting anything in return, just glad for the chance to care.";
  }
  else if (randomNumber === 63) {
    activeQuoteText = "Shared joy is a double joy; shared sorrow is half a sorrow when carried together by hearts that truly understand.";
  }
  else if (randomNumber === 64) {
    activeQuoteText = "Love does not consist in gazing at each other, but in looking outward together in the exact same direction.";
  }
  else if (randomNumber === 65) {
    activeQuoteText = "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.";
  }
  else if (randomNumber === 66) {
    activeQuoteText = "There is no charm equal to tenderness of heart; it softens the world and makes the hardest paths gentle to walk.";
  }
  else if (randomNumber === 67) {
    activeQuoteText = "You don't need to apologize for the space you take up, nor do you need to shrink yourself to make others comfortable.";
  }
  else if (randomNumber === 68) {
    activeQuoteText = "Your heart is like a mirror; if you keep it clean and free of bitterness, it will reflect the true beauty of life.";
  }
  else if (randomNumber === 69) {
    activeQuoteText = "The most difficult mountain you will ever have to climb is the one created by your own thoughts and doubts.";
  }
  else if (randomNumber === 70) {
    activeQuoteText = "You have to learn to be your own anchor when the sea gets rough and everyone else is drifting away.";
  }
  else if (randomNumber === 71) {
    activeQuoteText = "The secret of health for both mind and body is not to mourn for the past, but to live wisely now.";
  }
  else if (randomNumber === 72) {
    activeQuoteText = "You cannot heal a wound by pretending it isn't there; you must acknowledge the pain before you can find the cure.";
  }
  else if (randomNumber === 73) {
    activeQuoteText = "Be proud of how far you have come, especially of the silent battles you fought when no one else was watching.";
  }
  else if (randomNumber === 74) {
    activeQuoteText = "The highest form of knowledge is to understand yourself, for only then can you understand the world around you with clarity.";
  }
  else if (randomNumber === 75) {
    activeQuoteText = "Do not look back at the doors that closed on you; look forward to the new paths that are opening up.";
  }
  else if (randomNumber === 76) {
    activeQuoteText = "The caterpillar does not know it will fly; it simply trusts the process of the dark cocoon and waits for time.";
  }
  else if (randomNumber === 77) {
    activeQuoteText = "You cannot expect to grow into a new version of yourself while holding onto the habits that keep you stuck.";
  }
  else if (randomNumber === 78) {
    activeQuoteText = "Life will always give you exactly what you need to grow, even if it comes packaged as a difficult problem.";
  }
  else if (randomNumber === 79) {
    activeQuoteText = "Do not let the world rush you into choices you aren't ready for; your timing is unique and perfectly your own.";
  }
  else if (randomNumber === 80) {
    activeQuoteText = "The river cuts through rock not because of its power, but because of its persistence over a very long time.";
  }
  else if (randomNumber === 81) {
    activeQuoteText = "You are a work in progress, meaning you are allowed to make mistakes while you learn how to build your life.";
  }
  else if (randomNumber === 82) {
    activeQuoteText = "The dark night may last for a long time, but it cannot stop the sun from rising and bringing a new day.";
  }
  else if (randomNumber === 83) {
    activeQuoteText = "You do not have to prove your worth to anyone; your value is inherent and cannot be taken away by others.";
  }
  else if (randomNumber === 84) {
    activeQuoteText = "When you feel like you are buried in the dark, remember that you might actually be planted and ready to grow.";
  }
  else if (randomNumber === 85) {
    activeQuoteText = "The storm may shake your branches and strip away your leaves, but it cannot destroy the deep roots you have built.";
  }
  else if (randomNumber === 86) {
    activeQuoteText = "You must learn to trust the silent spaces in your life, for that is where your inner strength is quietly growing.";
  }
  else if (randomNumber === 87) {
    activeQuoteText = "Do not fear the wilderness of uncertainty; it is often the place where you discover what you are truly capable of.";
  }
  else if (randomNumber === 88) {
    activeQuoteText = "The heaviest weights we carry are not the things the world puts on us, but the thoughts we choose to hold.";
  }
  else if (randomNumber === 89) {
    activeQuoteText = "The quality of your life is determined by the quality of your thoughts and the kindness you show to yourself daily.";
  }
  else if (randomNumber === 90) {
    activeQuoteText = "Do not waste your energy trying to change things you cannot control; focus instead on how you choose to respond today.";
  }
  else if (randomNumber === 91) {
    activeQuoteText = "The world is full of noise, but your true purpose can only be found when you listen to the quiet within.";
  }
  else if (randomNumber === 92) {
    activeQuoteText = "You do not need a perfect plan to move forward; you only need the courage to take the next single step.";
  }
  else if (randomNumber === 93) {
    activeQuoteText = "The best way to predict your future is to create it through the actions and choices you make right now.";
  }
  else if (randomNumber === 94) {
    activeQuoteText = "Life is a blank canvas, and every single day you are given the opportunity to paint a completely new picture.";
  }
  else if (randomNumber === 95) {
    activeQuoteText = "The greatest gift you can give to another human being is the gift of your true presence and undivided attention.";
  }
  else if (randomNumber === 96) {
    activeQuoteText = "Peace is not the absence of trouble, but the presence of a calm and steady mind in the midst of chaos.";
  }
  else if (randomNumber === 97) {
    activeQuoteText = "You will find that the more love you give away to the world, the more love your heart holds onto.";
  }
  else if (randomNumber === 98) {
    activeQuoteText = "Do not judge a person by the mistakes they made in the past, but by the direction they are moving now.";
  }
  else if (randomNumber === 99) {
    activeQuoteText = "The simple act of listening without trying to fix everything is often the most powerful form of kindness you can offer.";
  }
  else if (randomNumber === 100) {
    activeQuoteText = "You cannot expect to find peace in the world until you have made peace with the person in the mirror.";
  } 
  else if (randomNumber === 101) {
    activeQuoteText = "The brightness of your future does not depend on the darkness of your past, but on the choices you make today.";
  }
  else if (randomNumber === 102) {
    activeQuoteText = "Do not force your life into a mold that was never meant for you; your true potential lies in your authenticity.";
  }
  else if (randomNumber === 103) {
    activeQuoteText = "A single step taken in the right direction is worth more than a mile walked in the wrong one just to blend in.";
  }
  else if (randomNumber === 104) {
    activeQuoteText = "The greatest victory you will ever achieve is conquering the doubt that whispers you are not capable of greatness.";
  }
  else if (randomNumber === 105) {
    activeQuoteText = "You do not have to conquer the whole world in a single day; just focus on winning the morning and the moment.";
  }
  else if (randomNumber === 106) {
    activeQuoteText = "Your worth is not a variable that changes based on how much validation you receive from people around you.";
  }
  else if (randomNumber === 107) {
    activeQuoteText = "The quiet moments of reflection are often where the loudest truths and the best insights find their way to us.";
  }
  else if (randomNumber === 108) {
    activeQuoteText = "Do not let the speed of the world dictate the pace of your heart; some of the best things take time to bloom.";
  }
  else if (randomNumber === 109) {
    activeQuoteText = "You can be deeply grateful for where you are while simultaneously working hard for the place you want to be.";
  }
  else if (randomNumber === 110) {
    activeQuoteText = "The shadows of yesterday will always vanish the moment you choose to step completely into the light of today.";
  }
  else if (randomNumber === 111) {
    activeQuoteText = "Kindness extended to an adversary is not a sign of weakness, but the ultimate demonstration of inner strength.";
  }
  else if (randomNumber === 112) {
    activeQuoteText = "You do not need to have all the answers mapped out before you find the courage to begin your great adventure.";
  }
  else if (randomNumber === 113) {
    activeQuoteText = "The world will tell you to blend in, but your soul knows that you were created to stand out and speak your truth.";
  }
  else if (randomNumber === 114) {
    activeQuoteText = "Every mistake is a gentle guide showing you exactly where you need to adjust your direction and try once more.";
  }
  else if (randomNumber === 115) {
    activeQuoteText = "Your mind is a garden, and the thoughts you choose to cultivate will determine the harvest you reap in your life.";
  }
  else if (randomNumber === 116) {
    activeQuoteText = "Do not carry the baggage of old expectations into a new season that requires you to travel light and free.";
  }
  else if (randomNumber === 117) {
    activeQuoteText = "The most authentic form of courage is showing up as yourself even when it would be easier to wear a mask.";
  }
  else if (randomNumber === 118) {
    activeQuoteText = "A beautiful life is not found by searching across the globe, but by creating peace right where you stand.";
  }
  else if (randomNumber === 119) {
    activeQuoteText = "You are under no obligation to remain the exact same person you were just an hour ago; growth is always allowed.";
  }
  else if (randomNumber === 120) {
    activeQuoteText = "The stars require a backdrop of deep darkness to show their true brilliance; your struggles work the same way.";
  }
  else if (randomNumber === 121) {
    activeQuoteText = "Do not trade your long-term peace of mind for short-term comfort that leaves your soul feeling empty inside.";
  }
  else if (randomNumber === 122) {
    activeQuoteText = "The best chapters of your journey have not been written yet; keep turning the pages with hope and curiosity.";
  }
  else if (randomNumber === 123) {
    activeQuoteText = "You are the author of your own story, so do not let anyone else hold the pen or dictate the final words.";
  }
  else if (randomNumber === 124) {
    activeQuoteText = "The energy you put out into the world has a beautiful way of finding its path right back to your own doorstep.";
  }
  else if (randomNumber === 125) {
    activeQuoteText = "When the noise of the crowd gets too loud, the wisest choice you can make is to return to your own quiet truth.";
  }
  else if (randomNumber === 126) {
    activeQuoteText = "You cannot catch the wind of opportunity if your sails are still tied tightly to the docks of your past comfort.";
  }
  else if (randomNumber === 127) {
    activeQuoteText = "True wealth is measured by the number of things you possess that money could never buy or replace in a lifetime.";
  }
  else if (randomNumber === 128) {
    activeQuoteText = "Do not wait for the perfect conditions to start building your dream; the perfect time will always be right now.";
  }
  else if (randomNumber === 129) {
    activeQuoteText = "The capacity to feel deeply is not a flaw; it is the very thing that allows you to connect with the world around you.";
  }
  else if (randomNumber === 130) {
    activeQuoteText = "You must learn to forgive yourself for the things you did not know before you had the experience to guide you.";
  }
  else if (randomNumber === 131) {
    activeQuoteText = "An open heart will always attract the right people, even if it occasionally takes some bumps along the journey.";
  }
  else if (randomNumber === 132) {
    activeQuoteText = "The greatest lessons are rarely learned during seasons of ease; they are forged in the fire of our challenges.";
  }
  else if (randomNumber === 133) {
    activeQuoteText = "Do not let the small minds of others convince you that your dreams are too large or impossible to achieve.";
  }
  else if (randomNumber === 134) {
    activeQuoteText = "Your presence in this world matters more than you know, and your unique light cannot be replicated by anyone.";
  }
  else if (randomNumber === 135) {
    activeQuoteText = "The standard of a good day is not how much you accomplished, but how much grace and kindness you shared with others.";
  }
  else if (randomNumber === 136) {
    activeQuoteText = "You do not need to earn the right to rest; taking care of your soul is a necessity, not a reward for labor.";
  }
  else if (randomNumber === 137) {
    activeQuoteText = "The seeds of greatness are often planted in the soil of quiet perseverance when nobody is around to applaud.";
  }
  else if (randomNumber === 138) {
    activeQuoteText = "Do not be afraid of a fresh start; it is a beautiful opportunity to build something better than what was there.";
  }
  else if (randomNumber === 139) {
    activeQuoteText = "The most beautiful view comes after the hardest climb; keep your eyes on the horizon and take another step.";
  }
  else if (randomNumber === 140) {
    activeQuoteText = "You cannot control the waves of change, but you can absolute choose how you set your sails to catch the wind.";
  }
  else if (randomNumber === 141) {
    activeQuoteText = "A gentle response has the power to disarm anger and turn a potential conflict into an opportunity for connection.";
  }
  else if (randomNumber === 142) {
    activeQuoteText = "Do not allow the opinions of casual observers to alter the profound truth of who you know yourself to be inside.";
  }
  else if (randomNumber === 143) {
    activeQuoteText = "Your journey is unique to you, so comparing your progress to someone else's path is an exercise in futility.";
  }
  else if (randomNumber === 144) {
    activeQuoteText = "The heaviest armor you wear can become the very weight that prevents you from moving forward with freedom.";
  }
  else if (randomNumber === 145) {
    activeQuoteText = "When you choose to see the good in others, you automatically begin to bring out the very best within yourself.";
  }
  else if (randomNumber === 146) {
    activeQuoteText = "You do not need an invitation to be kind, nor do you need permission to make the world a slightly better place.";
  }
  else if (randomNumber === 147) {
    activeQuoteText = "The focus of your attention determines the quality of your reality; choose to look for the light in every space.";
  }
  else if (randomNumber === 148) {
    activeQuoteText = "Do not let a single bad chapter convince you that your entire story is a failure; there are many pages left.";
  }
  else if (randomNumber === 149) {
    activeQuoteText = "The most resilient structures are those that know how to flex and bend when the high winds begin to blow.";
  }
  else if (randomNumber === 150) {
    activeQuoteText = "You have within you an untapped well of resilience that will surprise you whenever life demands your strength.";
  }
  else if (randomNumber === 151) {
    activeQuoteText = "The simple joy of being alive can get lost in the pursuit of more; take a moment to look around and just appreciate.";
  }
  else if (randomNumber === 152) {
    activeQuoteText = "Do not fear the dark times, for they are often the exact moments when the roots of your character grow deep.";
  }
  else if (randomNumber === 153) {
    activeQuoteText = "Your worth is entirely independent of your productivity; you are valuable simply because you exist in this world.";
  }
  else if (randomNumber === 154) {
    activeQuoteText = "The greatest thing you can do for your future self is to make choices today that build a foundation of peace.";
  }
  else if (randomNumber === 155) {
    activeQuoteText = "A compassionate heart is a beacon of hope in a world that can sometimes feel cold and indifferent to pain.";
  }
  else if (randomNumber === 156) {
    activeQuoteText = "Do not let the fear of what could go wrong keep you from imagining everything that could go absolutely right.";
  }
  else if (randomNumber === 157) {
    activeQuoteText = "The most profound discoveries are often made when you step completely off the beaten path and follow your heart.";
  }
  else if (randomNumber === 158) {
    activeQuoteText = "You have the power to redefine your narrative at any given moment; no old pattern has a permanent hold on you.";
  }
  else if (randomNumber === 159) {
    activeQuoteText = "The measure of growth is not perfection, but the ability to look back and realize you no longer react the same way.";
  }
  else if (randomNumber === 160) {
    activeQuoteText = "Do not let the words of an angry moment ruin a relationship that took years of love and trust to build up.";
  }
  else if (randomNumber === 161) {
    activeQuoteText = "The truest form of wisdom is knowing when to speak your mind and when to let silence do the heavy lifting.";
  }
  else if (randomNumber === 162) {
    activeQuoteText = "Your life is an echo; what you send out into the universe always finds a creative way to return to its source.";
  }
  else if (randomNumber === 163) {
    activeQuoteText = "Do not allow the small frustrations of a single morning to shadow the endless possibilities of the whole day.";
  }
  else if (randomNumber === 164) {
    activeQuoteText = "The only true limits on your life are the boundaries you accept inside the confines of your own imagination.";
  }
  else if (randomNumber === 165) {
    activeQuoteText = "A strong spirit can navigate the roughest terrain with a sense of grace that inspires everyone along the way.";
  }
  else if (randomNumber === 166) {
    activeQuoteText = "You do not need to change the entire world to be significant; changing one life for the better is a grand victory.";
  }
  else if (randomNumber === 167) {
    activeQuoteText = "The beauty of life is often hidden in the mundane details that we miss when we are rushing toward the future.";
  }
  else if (randomNumber === 168) {
    activeQuoteText = "Do not let your inner flame be extinguished by the cold indifference of people who do not understand your passion.";
  }
  else if (randomNumber === 169) {
    activeQuoteText = "The road to success is paved with milestones of persistence that were built during times of absolute doubt.";
  }
  else if (randomNumber === 170) {
    activeQuoteText = "You are far more resilient than your fears tell you; listen to your courage instead of the anxious whispers.";
  }
  else if (randomNumber === 171) {
    activeQuoteText = "A life lived with intention is a masterpiece in progress, regardless of how messy the studio looks right now.";
  }
  else if (randomNumber === 172) {
    activeQuoteText = "Do not focus on how much further you have to travel; take pride in how many difficult miles are behind you.";
  }
  else if (randomNumber === 173) {
    activeQuoteText = "The quiet confidence of knowing who you are will always outlast the loud arrogance of trying to prove something.";
  }
  else if (randomNumber === 174) {
    activeQuoteText = "You cannot find clarity while standing in the middle of a storm; step back, breathe deeply, and let things settle.";
  }
  else if (randomNumber === 175) {
    activeQuoteText = "The gift of forgiveness is not something you grant to help others; it is the key that unlocks your own cage.";
  }
  else if (randomNumber === 176) {
    activeQuoteText = "Do not let your happiness be dependent on external events that can change with the shifting of the wind.";
  }
  else if (randomNumber === 177) {
    activeQuoteText = "The heart that is full of gratitude has no room for the weeds of bitterness and envy to take root and grow.";
  }
  else if (randomNumber === 178) {
    activeQuoteText = "You possess a unique perspective that the world desperately needs; do not rob us of your voice and insight.";
  }
  else if (randomNumber === 179) {
    activeQuoteText = "The best way to honor your dreams is to take a small, practical action in their direction every single day.";
  }
  else if (randomNumber === 180) {
    activeQuoteText = "Do not expect everyone to understand your journey, especially those who have never walked a mile in your shoes.";
  }
  else if (randomNumber === 181) {
    activeQuoteText = "The most impactful leaders are those who listen twice as much as they speak and lead with absolute empathy.";
  }
  else if (randomNumber === 182) {
    activeQuoteText = "You are capable of handling whatever this day brings, because your past has already proven your deep strength.";
  }
  else if (randomNumber === 183) {
    activeQuoteText = "The true essence of joy is found not in the acquisition of wealth, but in the appreciation of simple moments.";
  }
  else if (randomNumber === 184) {
    activeQuoteText = "Do not let the complexity of your goals paralyze you from taking the first simple step toward achievement.";
  }
  else if (randomNumber === 185) {
    activeQuoteText = "The bond of true connection can cross oceans and withstand years because it is anchored in mutual respect.";
  }
  else if (randomNumber === 186) {
    activeQuoteText = "You do not have to apologize for protecting your boundaries; peace is an essential asset that requires defense.";
  }
  else if (randomNumber === 187) {
    activeQuoteText = "The dynamic nature of life means that every single ending is simply a secret beginning waiting to be noticed.";
  }
  else if (randomNumber === 188) {
    activeQuoteText = "Do not let an old disappointment keep you from trusting the beautiful opportunities arriving in your life now.";
  }
  else if (randomNumber === 189) {
    activeQuoteText = "The most beautiful souls are those who have known adversity and emerged with a deeper capacity for kindness.";
  }
  else if (randomNumber === 190) {
    activeQuoteText = "You are not obligated to fix every broken thing you encounter; sometimes your only job is to walk in peace.";
  }
  else if (randomNumber === 191) {
    activeQuoteText = "The truth of your character is revealed in how you treat individuals who can do absolutely nothing for you.";
  }
  else if (randomNumber === 192) {
    activeQuoteText = "Do not let the temporary rain convince you that the sun has forgotten its way back to your part of the sky.";
  }
  else if (randomNumber === 193) {
    activeQuoteText = "The path of self-discovery requires us to leave behind the safety of our old identities and embrace the new.";
  }
  else if (randomNumber === 194) {
    activeQuoteText = "You are far more than the sum of your achievements or failures; you are a living breathing human miracle.";
  }
  else if (randomNumber === 195) {
    activeQuoteText = "The quiet strength of persistence will eventually wear down the most formidable obstacles you face in life.";
  }
  else if (randomNumber === 196) {
    activeQuoteText = "Do not allow a critical voice to reside rent-free in your mind; fill that valuable space with kind thoughts.";
  }
  else if (randomNumber === 197) {
    activeQuoteText = "The greatest form of self-care is choosing to speak to yourself with the same love you give to your friends.";
  }
  else if (randomNumber === 198) {
    activeQuoteText = "You cannot purchase a meaningful life, but you can build one through daily acts of integrity and service.";
  }
  else if (randomNumber === 199) {
    activeQuoteText = "The horizon is constantly moving forward, inviting us to shed our old fears and walk into a brand new dawn.";
  }
  else if (randomNumber === 200) {
    activeQuoteText = "Do not let the standards of a commercial world dictate what brings genuine fulfillment to your unique soul.";
  }
  else if (randomNumber === 201) {
    activeQuoteText = "The presence of doubt is not a sign that you should stop, but an invitation to move forward with real courage.";
  }
  else if (randomNumber === 202) {
    activeQuoteText = "You have the capacity to bring a sense of calm into every single room you enter just by being completely present.";
  }
  else if (randomNumber === 203) {
    activeQuoteText = "The most important work you will ever complete is the internal work you do on your own mind and character.";
  }
  else if (randomNumber === 204) {
    activeQuoteText = "Do not allow the cynicism of the world to tarnish the beautiful sense of wonder that lives inside your heart.";
  }
  else if (randomNumber === 205) {
    activeQuoteText = "The strength of a community is built on the silent kindnesses that neighbors extend to one another every day.";
  }
  else if (randomNumber === 206) {
    activeQuoteText = "You do not need to be perfect to be a source of profound inspiration to someone who is currently struggling.";
  }
  else if (randomNumber === 207) {
    activeQuoteText = "The rhythm of life has its own unique seasons; do not try to harvest fruit during a time meant for deep roots.";
  }
  else if (randomNumber === 208) {
    activeQuoteText = "Do not look for validation in places where people lack the capacity to understand your true value and depth.";
  }
  else if (randomNumber === 209) {
    activeQuoteText = "The beauty of a second chance is that it allows us to apply the hard-won wisdom of our previous failures.";
  }
  else if (randomNumber === 210) {
    activeQuoteText = "You are an essential thread in the vast tapestry of humanity; without you, the picture would be incomplete.";
  }
  else if (randomNumber === 211) {
    activeQuoteText = "The path to peace is found not by avoiding life's challenges, but by confronting them with a steady spirit.";
  }
  else if (randomNumber === 212) {
    activeQuoteText = "Do not let an occasional setback convince you that the ultimate destination you are seeking is out of reach.";
  }
  else if (randomNumber === 213) {
    activeQuoteText = "The most valuable currency you can spend is your time, so invest it wisely in things that feed your spirit.";
  }
  else if (randomNumber === 214) {
    activeQuoteText = "You have the incredible ability to transform an ordinary day into an extraordinary memory through gratitude.";
  }
  else if (randomNumber === 215) {
    activeQuoteText = "The quiet voice of your intuition will always guide you safely when the opinions of the world get too loud.";
  }
  else if (randomNumber === 216) {
    activeQuoteText = "Do not build your house on the shifting sand of popularity; ground your life on the bedrock of your values.";
  }
  else if (randomNumber === 217) {
    activeQuoteText = "The truest sign of emotional maturity is the ability to walk away from drama without needing the last word.";
  }
  else if (randomNumber === 218) {
    activeQuoteText = "You are completely worthy of the love and kindness you so freely distribute to everyone else around you.";
  }
  else if (randomNumber === 219) {
    activeQuoteText = "The landscape of your life will change completely the moment you decide to focus on abundance over lack.";
  }
  else if (randomNumber === 220) {
    activeQuoteText = "Do not let a closed door make you forget all the open highways that are currently waiting for your steps.";
  }
  else if (randomNumber === 221) {
    activeQuoteText = "The art of living is found in learning how to appreciate the beauty of the journey while moving toward a goal.";
  }
  else if (randomNumber === 222) {
    activeQuoteText = "You do not have to know everything to be helpful; a listening ear is often the greatest gift you can provide.";
  }
  else if (randomNumber === 223) {
    activeQuoteText = "The weight of resentment will always slow your progress; release it and watch how fast you can move forward.";
  }
  else if (randomNumber === 224) {
    activeQuoteText = "Do not let the clouds of today make you forget that the sky above them remains a permanent, brilliant blue.";
  }
  else if (randomNumber === 225) {
    activeQuoteText = "The best use of your imagination is to envision a future filled with hope, growth, and authentic connection.";
  }
  else if (randomNumber === 226) {
    activeQuoteText = "You have the power to break old generational patterns and build a legacy of love, empathy, and integrity.";
  }
  else if (randomNumber === 227) {
    activeQuoteText = "The texture of your life is woven from the small choices you make when you think nobody is watching you.";
  }
  else if (randomNumber === 228) {
    activeQuoteText = "Do not allow a sense of urgency to rob you of the deep joy that can only be found in the present moment.";
  }
  else if (randomNumber === 229) {
    activeQuoteText = "The most impactful gift you can offer to a friend in distress is your steady, non-judgmental presence.";
  }
  else if (randomNumber === 230) {
    activeQuoteText = "You are not a finished product; you are an ongoing creative process that deserves patience and kindness.";
  }
  else if (randomNumber === 231) {
    activeQuoteText = "The true value of an achievement is found in the character you had to build in order to reach that summit.";
  }
  else if (randomNumber === 232) {
    activeQuoteText = "Do not let your internal peace be hijacked by things that will not matter at all in a few months' time.";
  }
  else if (randomNumber === 233) {
    activeQuoteText = "The beauty of a silent morning is a reminder that every day begins with a clean slate and new potential.";
  }
  else if (randomNumber === 234) {
    activeQuoteText = "You do not have to prove your significance to anyone; your presence in this life is already fully justified.";
  }
  else if (randomNumber === 235) {
    activeQuoteText = "The architecture of your mind should be designed to foster peaceful thoughts and constructive aspirations.";
  }
  else if (randomNumber === 236) {
    activeQuoteText = "Do not allow a temporary storm to cause you to abandon the beautiful ship you have spent years building.";
  }
  else if (randomNumber === 237) {
    activeQuoteText = "The finest moments of human connection happen when we drop our defenses and speak from a place of honesty.";
  }
  else if (randomNumber === 238) {
    activeQuoteText = "You possess an inner compass that knows exactly where your true path lies; trust its subtle orientation.";
  }
  else if (randomNumber === 239) {
    activeQuoteText = "The most beautiful scenery in life is discovered when you take a wrong turn and find a hidden path forward.";
  }
  else if (randomNumber === 240) {
    activeQuoteText = "Do not let the size of a challenge diminish the size of your spirit; you are built to handle hard things.";
  }
  else if (randomNumber === 241) {
    activeQuoteText = "The capacity to start over with a smile is the ultimate indicator of an indomitable and creative soul.";
  }
  else if (randomNumber === 242) {
    activeQuoteText = "You do not need to seek out applause; the quiet satisfaction of a job well done is a far greater reward.";
  }
  else if (randomNumber === 243) {
    activeQuoteText = "The best way to light a dark room is not by complaining about the dark, but by striking a single match.";
  }
  else if (randomNumber === 244) {
    activeQuoteText = "Do not let an old narrative dictate your current identity; you have the complete freedom to rewrite it today.";
  }
  else if (randomNumber === 245) {
    activeQuoteText = "The grace you extend to another person during their failure is a beautiful mirror of your own deep character.";
  }
  else if (randomNumber === 246) {
    activeQuoteText = "You are entirely capable of constructing a life that feels genuinely good on the inside, not just to observers.";
  }
  else if (randomNumber === 247) {
    activeQuoteText = "The most resilient hearts are those that have known deep sorrow but still choose to love with radical hope.";
  }
  else if (randomNumber === 248) {
    activeQuoteText = "Do not trade your unique authenticity for a shallow imitation of someone else's version of perfection.";
  }
  else if (randomNumber === 249) {
    activeQuoteText = "The quiet rhythm of consistent effort will always produce more lasting fruit than occasional bursts of energy.";
  }
  else if (randomNumber === 250) {
    activeQuoteText = "You are the custodian of your own joy; do not give the keys to that sacred space to a casual bystander.";
  }
  else if (randomNumber === 251) {
    activeQuoteText = "The horizon promises a brand new perspective to anyone who is willing to keep walking through the mist.";
  }
  else if (randomNumber === 252) {
    activeQuoteText = "Do not let a moment of confusion cause you to forget the profound core values that anchor your entire life.";
  }
  else if (randomNumber === 253) {
    activeQuoteText = "The quality of your connections is far more important than the quantity of names in your contact registry.";
  }
  else if (randomNumber === 254) {
    activeQuoteText = "You have the capacity to choose your attitude in any situation, which is the ultimate human superpower.";
  }
  else if (randomNumber === 255) {
    activeQuoteText = "The beauty of autumn reminds us that letting go can be an incredibly graceful and necessary process.";
  }
  else if (randomNumber === 256) {
    activeQuoteText = "Do not let your mind become an echo chamber for worries that have a minimal chance of ever occurring.";
  }
  else if (randomNumber === 257) {
    activeQuoteText = "The real indicator of success is how much love, kindness, and genuine peace you carry within your spirit.";
  }
  else if (randomNumber === 258) {
    activeQuoteText = "You do not have to fit into every room you enter; your purpose might be to build a completely new space.";
  }
  else if (randomNumber === 259) {
    activeQuoteText = "The small daily steps of discipline are what eventually build the spectacular monuments of our life goals.";
  }
  else if (randomNumber === 260) {
    activeQuoteText = "Do not allow a critical voice to diminish the spectacular effort you put into growing your character daily.";
  }
  else if (randomNumber === 261) {
    activeQuoteText = "The most authentic conversations happen when we listen with the intent to understand rather than to reply.";
  }
  else if (randomNumber === 262) {
    activeQuoteText = "You are a dynamic human being with endless potential; do not let a label define your entire existence.";
  }
  else if (randomNumber === 263) {
    activeQuoteText = "The simplicity of a heartfelt gesture can heal a rift that words could never completely bridge on their own.";
  }
  else if (randomNumber === 264) {
    activeQuoteText = "Do not allow the accumulation of materials to obscure the profound importance of gathering beautiful memories.";
  }
  else if (randomNumber === 265) {
    activeQuoteText = "The strength of your foundation is tested during times of storm, not during days of easy sunshine.";
  }
  else if (randomNumber === 266) {
    activeQuoteText = "You possess an inner radiance that can illuminate the dark spaces of someone else's difficult afternoon.";
  }
  else if (randomNumber === 267) {
    activeQuoteText = "The greatest transformations happen silently within the quiet spaces where we choose to confront our fears.";
  }
  else if (randomNumber === 268) {
    activeQuoteText = "Do not wait for standard approval to start making a positive impact in the community where you reside.";
  }
  else if (randomNumber === 269) {
    activeQuoteText = "The road of life is a continuous lesson in the beautiful balance of holding on firmly and letting go gracefully.";
  }
  else if (randomNumber === 270) {
    activeQuoteText = "You do not need to have everything figured out to move forward with a sense of clarity and anticipation.";
  }
  else if (randomNumber === 271) {
    activeQuoteText = "The presence of structural friction is simply a sign that a beautiful polishing process is currently underway.";
  }
  else if (randomNumber === 272) {
    activeQuoteText = "Do not let the fast tempo of modern existence cause you to forget the simple value of a quiet walk.";
  }
  else if (randomNumber === 273) {
    activeQuoteText = "The most resilient minds are those that view every single obstacle as a fascinating puzzle to be solved.";
  }
  else if (randomNumber === 274) {
    activeQuoteText = "You are entirely worthy of the gentle patience and deep understanding that you provide to others around you.";
  }
  else if (randomNumber === 275) {
    activeQuoteText = "The beauty of life is often discovered when we finally stop rushing and learn to sit still with gratitude.";
  }
  else if (randomNumber === 276) {
    activeQuoteText = "Do not permit the behaviors of an insecure person to cause you to question your own well-earned worth.";
  }
  else if (randomNumber === 277) {
    activeQuoteText = "The best chapters of your personal history are waiting to be written by the bold choices you make today.";
  }
  else if (randomNumber === 278) {
    activeQuoteText = "You have the permanent capacity to hit reset and begin constructing a beautiful new pattern for your life.";
  }
  else if (randomNumber === 279) {
    activeQuoteText = "The true art of kindness is extending it to someone who has completely forgotten how to be kind to themselves.";
  }
  else if (randomNumber === 280) {
    activeQuoteText = "Do not allow the constraints of your current environment to limit the expansive landscape of your dreams.";
  }
  else if (randomNumber === 281) {
    activeQuoteText = "The quiet elegance of integrity requires no announcement; it speaks for itself through your daily actions.";
  }
  else if (randomNumber === 282) {
    activeQuoteText = "You do not need to justify your personal boundaries to anyone; your mental peace is a non-negotiable asset.";
  }
  else if (randomNumber === 283) {
    activeQuoteText = "The architecture of a happy life is built upon a foundation of simple, daily appreciations and small graces.";
  }
  else if (randomNumber === 284) {
    activeQuoteText = "Do not let an old mistake define the current trajectory of your life; you are constantly being renewed.";
  }
  else if (randomNumber === 285) {
    activeQuoteText = "The most impactful gift you can give the world is a version of yourself that is healed, whole, and authentic.";
  }
  else if (randomNumber === 286) {
    activeQuoteText = "You are a beautiful note in the grand symphony of existence; do not mute your sound for the comfort of others.";
  }
  else if (randomNumber === 287) {
    activeQuoteText = "The dynamic flow of life always ensures that after every deep winter, a vibrant spring is bound to appear.";
  }
  else if (randomNumber === 288) {
    activeQuoteText = "Do not let a cynical observation cause you to doubt the immense power of a purely unselfish act of love.";
  }
  else if (randomNumber === 289) {
    activeQuoteText = "The true measure of a friend is their willingness to stand beside you when the applause has completely died down.";
  }
  else if (randomNumber === 290) {
    activeQuoteText = "You do not have to carry the weight of everyone else's expectations; travel light and follow your own soul.";
  }
  else if (randomNumber === 291) {
    activeQuoteText = "The beauty of your character is shaped by the silent choices you make when there is no audience to impress.";
  }
  else if (randomNumber === 292) {
    activeQuoteText = "Do not allow a fleeting disappointment to obscure the immense abundance that currently surrounds your life.";
  }
  else if (randomNumber === 293) {
    activeQuoteText = "The most profound changes begin with a quiet decision to stop participating in things that drain your spirit.";
  }
  else if (randomNumber === 294) {
    activeQuoteText = "You are far more resilient than your anxious thoughts assume; trust the quiet strength that lives inside you.";
  }
  else if (randomNumber === 295) {
    activeQuoteText = "The gentle persistence of a small stream can carve out canyons if given the gift of sufficient patience.";
  }
  else if (randomNumber === 296) {
    activeQuoteText = "Do not permit a critical word from a stranger to disrupt the beautiful equilibrium of your inner world.";
  }
  else if (randomNumber === 297) {
    activeQuoteText = "The greatest victory is not beating someone else, but overcoming the limitations you once placed on yourself.";
  }
  else if (randomNumber === 298) {
    activeQuoteText = "You cannot purchase a sense of purpose, but you can cultivate it by aligning your actions with your values.";
  }
  else if (randomNumber === 299) {
    activeQuoteText = "The horizon is a continuous invitation to leave behind your old hesitations and step forward with confidence.";
  }
  else if (randomNumber === 300) {
    activeQuoteText = "Do not allow the speed of digital noise to distract you from the profound reality of physical presence.";
  }
  else if (randomNumber === 301) {
    activeQuoteText = "The presence of hesitation is often just your inner wisdom telling you to take a breath before you jump.";
  }
  else if (randomNumber === 302) {
    activeQuoteText = "You have the quiet power to change the atmosphere of an entire room just by leading with absolute empathy.";
  }
  else if (randomNumber === 303) {
    activeQuoteText = "The most significant investments you will ever make are the ones you pour directly into your personal growth.";
  }
  else if (randomNumber === 304) {
    activeQuoteText = "Do not let a competitive world convince you that life is a race instead of a beautiful shared journey.";
  }
  else if (randomNumber === 305) {
    activeQuoteText = "The strength of your soul is built in the quiet moments of perseverance that no one else will ever see.";
  }
  else if (randomNumber === 306) {
    activeQuoteText = "You do not need to be completely healed to be an immense source of comfort to someone in deep pain.";
  }
  else if (randomNumber === 307) {
    activeQuoteText = "The natural seasons of life teach us that periods of rest are just as essential as periods of high harvest.";
  }
  else if (randomNumber === 308) {
    activeQuoteText = "Do not look for emotional validation from sources that have consistently shown an inability to see your worth.";
  }
  else if (randomNumber === 309) {
    activeQuoteText = "The gift of an unexpected challenge is that it forces us to discover resources we didn't know we possessed.";
  }
  else if (randomNumber === 310) {
    activeQuoteText = "You are an irreplaceable thread in the grand design of the universe; your absence would leave a void.";
  }
  else if (randomNumber === 311) {
    activeQuoteText = "The path to an authentic life begins with the courage to say no to things that do not match your values.";
  }
  else if (randomNumber === 312) {
    activeQuoteText = "Do not let a momentary failure convince you that you are incapable of reaching your ultimate destination.";
  }
  else if (randomNumber === 313) {
    activeQuoteText = "The most valuable asset you have is your focus; protect it from the endless distractions of a loud world.";
  }
  else if (randomNumber === 314) {
    activeQuoteText = "You possess the incredible ability to shift your entire day simply by changing the narrative in your mind.";
  }
  else if (randomNumber === 315) {
    activeQuoteText = "The quiet voice of your inner truth will always be your best compass when navigating a season of change.";
  }
  else if (randomNumber === 316) {
    activeQuoteText = "Do not build your self-worth on the fickle praise of others; find your anchor in your internal integrity.";
  }
  else if (randomNumber === 317) {
    activeQuoteText = "The truest sign of inner strength is the ability to offer grace to someone who has treated you unfairly.";
  }
  else if (randomNumber === 318) {
    activeQuoteText = "You are entirely worthy of the same deep care and unconditional love that you give away to the world.";
  }
  else if (randomNumber === 319) {
    activeQuoteText = "The entire landscape of your reality shifts for the better the moment you choose to lead with real gratitude.";
  }
  else if (randomNumber === 320) {
    activeQuoteText = "Do not let one closed pathway make you lose sight of the infinite highways that are open to your steps.";
  }
  else if (randomNumber === 321) {
    activeQuoteText = "The joy of existence is found in learning how to appreciate the details while moving toward a grand goal.";
  }
  else if (randomNumber === 322) {
    activeQuoteText = "You do not need to know all the answers to be helpful; sometimes a quiet presence is the best remedy.";
  }
  else if (randomNumber === 323) {
    activeQuoteText = "The heavy weight of holding a grudge will always slow you down; drop the burden and walk with freedom.";
  }
  else if (randomNumber === 324) {
    activeQuoteText = "Do not let the gray skies of a single season cause you to forget that the sun is a permanent fixture.";
  }
  else if (randomNumber === 325) {
    activeQuoteText = "The best use of your mind is to construct a vision of the future rooted in hope, love, and persistence.";
  }
  else if (randomNumber === 326) {
    activeQuoteText = "You have the innate power to break old destructive cycles and establish a brand new standard of kindness.";
  }
  else if (randomNumber === 327) {
    activeQuoteText = "The unique texture of your life is built from the micro-choices you make when nobody is evaluating you.";
  }
  else if (randomNumber === 328) {
    activeQuoteText = "Do not allow an artificial sense of rush to steal the profound peace that belongs to the present moment.";
  }
  else if (randomNumber === 329) {
    activeQuoteText = "The most supportive thing you can do for a friend is to listen without trying to immediately fix things.";
  }
  else if (randomNumber === 330) {
    activeQuoteText = "You are not a finished painting; you are an artist constantly adding beautiful new strokes to the canvas.";
  }
  else if (randomNumber === 331) {
    activeQuoteText = "The real value of an accomplishment lies in the resilience you were forced to develop along the journey.";
  }
  else if (randomNumber === 332) {
    activeQuoteText = "Do not allow your peace of mind to be held hostage by situations that will be forgotten by next year.";
  }
  else if (randomNumber === 333) {
    activeQuoteText = "The quiet beauty of a new morning is a gentle reminder that you are always granted a fresh opportunity.";
  }
  else if (randomNumber === 334) {
    activeQuoteText = "You do not need to prove your importance to anyone; your existence in this world is purpose enough.";
  }
  else if (randomNumber === 335) {
    activeQuoteText = "The layout of your mind should be intentionally designed to nurture calm thoughts and authentic dreams.";
  }
  else if (randomNumber === 336) {
    activeQuoteText = "Do not allow a brief storm to cause you to abandon the beautiful progress you have made over the years.";
  }
  else if (randomNumber === 337) {
    activeQuoteText = "The absolute best connections occur when we choose to lower our defenses and speak with absolute honesty.";
  }
  else if (randomNumber === 338) {
    activeQuoteText = "You have an internal compass that knows exactly where your fulfillment lies; trust its quiet guidance.";
  }
  else if (randomNumber === 339) {
    activeQuoteText = "The most magnificent paths are often found when you get turned around and have to find a brand new way.";
  }
  else if (randomNumber === 340) {
    activeQuoteText = "Do not let the scale of a problem shrink the scale of your spirit; you are designed to overcome.";
  }
  else if (randomNumber === 341) {
    activeQuoteText = "The capacity to begin again with joy is the ultimate sign of a truly unbreakable and creative spirit.";
  }
  else if (randomNumber === 342) {
    activeQuoteText = "You do not need to chase external praise; the quiet contentment of an honest effort is a better prize.";
  }
  else if (randomNumber === 343) {
    activeQuoteText = "The best way to bring light into a dark situation is to focus on what you can control and take action.";
  }
  else if (randomNumber === 344) {
    activeQuoteText = "Do not allow an old memory to dictate your current identity; you have the complete freedom to change.";
  }
  else if (randomNumber === 345) {
    activeQuoteText = "The patience you extend to another person during their struggle is a beautiful reflection of your heart.";
  }
  else if (randomNumber === 346) {
    activeQuoteText = "You are fully capable of design a life that brings real joy to your soul, regardless of others' opinions.";
  }
  else if (randomNumber === 347) {
    activeQuoteText = "The strongest hearts are those that have experienced great adversity but still choose to love with hope.";
  }
  else if (randomNumber === 348) {
    activeQuoteText = "Do not trade your beautiful uniqueness for a hollow copy of someone else's version of a perfect life.";
  }
  else if (randomNumber === 349) {
    activeQuoteText = "The steady cadence of daily effort will always yield more sustainable fruit than random acts of rush.";
  }
  else if (randomNumber === 350) {
    activeQuoteText = "You are the manager of your own emotional state; do not hand over the controls to a casual observer.";
  }
  else if (randomNumber === 351) {
    activeQuoteText = "The horizon holds a beautiful new promise for anyone who has the determination to keep moving forward.";
  }
  else if (randomNumber === 352) {
    activeQuoteText = "Do not let a moment of utter confusion cause you to abandon the deep principles that ground your life.";
  }
  else if (randomNumber === 353) {
    activeQuoteText = "The depth of your relationships is infinitely more important than the quantity of social connections.";
  }
  else if (randomNumber === 354) {
    activeQuoteText = "You have the ability to choose your mindset in any environment, which is the ultimate source of freedom.";
  }
  else if (randomNumber === 355) {
    activeQuoteText = "The beauty of nature reminds us that transitions can be an incredibly elegant and necessary phase of growth.";
  }
  else if (randomNumber === 356) {
    activeQuoteText = "Do not permit your mind to become a stadium for worries that are highly unlikely to ever materialize.";
  }
  else if (randomNumber === 357) {
    activeQuoteText = "The ultimate indicator of success is how much inner peace and unconditional kindness you carry with you.";
  }
  else if (randomNumber === 358) {
    activeQuoteText = "You do not have to adapt to every room you enter; your true calling might be to create a new space.";
  }
  else if (randomNumber === 359) {
    activeQuoteText = "The small acts of everyday discipline are what eventually construct the great milestones of our lives.";
  }
  else if (randomNumber === 360) {
    activeQuoteText = "Do not allow an external critique to diminish the spectacular work you put into improving your mind.";
  }
  else if (randomNumber === 361) {
    activeQuoteText = "The most impactful interactions occur when we listen with the single goal of understanding the other soul.";
  }
  else if (randomNumber === 362) {
    activeQuoteText = "You are a multifaceted person with boundless potential; do not let a single event define your identity.";
  }
  else if (randomNumber === 363) {
    activeQuoteText = "The simplicity of an intentional gesture can mend a misunderstanding that logic could never fully fix alone.";
  }
  else if (randomNumber === 364) {
    activeQuoteText = "Do not let the acquisition of goods distract you from the grand adventure of gathering beautiful memories.";
  }
  else if (randomNumber === 365) {
    activeQuoteText = "The strength of your inner anchor is demonstrated during times of challenge, not during days of ease.";
  }
  else if (randomNumber === 366) {
    activeQuoteText = "You possess a unique inner warmth that can brighten the dark spaces of someone else's difficult morning.";
  }
  else if (randomNumber === 367) {
    activeQuoteText = "The greatest growth happens quietly within the private spaces where we decide to face our anxieties.";
  }
  else if (randomNumber === 368) {
    activeQuoteText = "Do not wait for formal permission to start contributing to the well-being of the world around you.";
  }
  else if (randomNumber === 369) {
    activeQuoteText = "The journey of life is a continuous class in the elegant art of holding on tight and letting go gracefully.";
  }
  else if (randomNumber === 370) {
    activeQuoteText = "You do not need to have everything perfectly arranged to step forward with a sense of wonder and hope.";
  }
  else if (randomNumber === 371) {
    activeQuoteText = "The presence of standard resistance is merely a sign that a beautiful growth process is currently active.";
  }
  else if (randomNumber === 372) {
    activeQuoteText = "Do not let the fast tempo of modern society cause you to forget the immense value of a peaceful walk.";
  }
  else if (randomNumber === 373) {
    activeQuoteText = "The most resilient outlook is one that reframes every single challenge as a fascinating mystery to solve.";
  }
  else if (randomNumber === 374) {
    activeQuoteText = "You are completely deserving of the exact same gentle patience that you extend to people in your life.";
  }
  else if (randomNumber === 375) {
    activeQuoteText = "The beauty of life is often discovered when we finally slow down and learn to just sit with our thoughts.";
  }
  else if (randomNumber === 376) {
    activeQuoteText = "Do not allow the actions of an unstable person to cause you to doubt your own hard-earned self-worth.";
  }
  else if (randomNumber === 377) {
    activeQuoteText = "The absolute best chapters of your life are waiting to be authored by the courageous choices you make today.";
  }
  else if (randomNumber === 378) {
    activeQuoteText = "You have the continuous capability to hit reset and begin creating a beautiful new design for your day.";
  }
  else if (randomNumber === 379) {
    activeQuoteText = "The true art of compassion is showing it to an individual who has forgotten how to care for themselves.";
  }
  else if (randomNumber === 380) {
    activeQuoteText = "Do not allow the limitations of your current situation to restrict the magnificent landscape of your dreams.";
  }
  else if (randomNumber === 381) {
    activeQuoteText = "The quiet power of personal integrity requires no press; it proves itself through your daily behavior.";
  }
  else if (randomNumber === 382) {
    activeQuoteText = "You do not need to defend your personal boundaries to anyone; your inner peace is a sacred priority.";
  }
  else if (randomNumber === 383) {
    activeQuoteText = "The architecture of a content life is built upon a foundation of simple appreciations and small kindnesses.";
  }
  else if (randomNumber === 384) {
    activeQuoteText = "Do not let a past failure define the current direction of your journey; you are constantly expanding.";
  }
  else if (randomNumber === 385) {
    activeQuoteText = "The most important asset you can present to the world is a version of yourself that is whole and authentic.";
  }
  else if (randomNumber === 386) {
    activeQuoteText = "You are a beautiful melody in the grand arrangement of life; do not lower your volume for others' comfort.";
  }
  else if (randomNumber === 387) {
    activeQuoteText = "The cyclical nature of the universe guarantees that after every dark night, a bright morning will show up.";
  }
  else if (randomNumber === 388) {
    activeQuoteText = "Do not let a bitter remark cause you to lose faith in the incredible power of a simple, unselfish act.";
  }
  else if (randomNumber === 389) {
    activeQuoteText = "The truest indicator of a friend is their willingness to walk with you when the spotlight has moved on.";
  }
  else if (randomNumber === 390) {
    activeQuoteText = "You do not have to shoulder the burden of everyone's validation; travel light and honor your own heart.";
  }
  else if (randomNumber === 391) {
    activeQuoteText = "The beauty of your soul is revealed by the quiet decisions you make when there is no crowd watching you.";
  }
  else if (randomNumber === 392) {
    activeQuoteText = "Do not let a passing difficulty obscure the grand landscape of abundance that currently embraces your life.";
  }
  else if (randomNumber === 393) {
    activeQuoteText = "The most profound personal shifts start with a quiet choice to walk away from spaces that drain your joy.";
  }
  else if (randomNumber === 394) {
    activeQuoteText = "You are much stronger than your worried thoughts believe; lean into the quiet resilience that lives within.";
  }
  else if (randomNumber === 395) {
    activeQuoteText = "The gentle flow of a small stream can carve out massive valleys if given the beautiful gift of time.";
  }
  else if (randomNumber === 396) {
    activeQuoteText = "Do not allow a critical word from a bystander to interrupt the steady balance of your internal world.";
  }
  else if (randomNumber === 397) {
    activeQuoteText = "The greatest achievement is not surpassing another person, but outgrowing the limits you used to have.";
  }
  else if (randomNumber === 398) {
    activeQuoteText = "You cannot buy a sense of deep meaning, but you can build it by matching your daily actions to your values.";
  }
  else if (randomNumber === 399) {
    activeQuoteText = "The horizon remains a constant invitation to drop your old doubts and step forward with absolute courage.";
  }
  else if (randomNumber === 400) {
    activeQuoteText = "Do not let the constant speed of digital notifications distract you from the beautiful reality of the present.";
  }
  else if (randomNumber === 401) {
    activeQuoteText = "The brightness of your dawn does not depend on the darkness of your night, but on the courage you summon today.";
  }
  else if (randomNumber === 402) {
    activeQuoteText = "Do not force your spirit into a mold that was never meant for you; your true power lies in your authenticity.";
  }
  else if (randomNumber === 403) {
    activeQuoteText = "A single step taken in the right direction is worth more than a mile walked in the wrong one just to blend in.";
  }
  else if (randomNumber === 404) {
    activeQuoteText = "The greatest victory you will ever achieve is conquering the quiet doubt that whispers you are not ready.";
  }
  else if (randomNumber === 405) {
    activeQuoteText = "You do not have to conquer the whole mountain in a single day; just focus on winning the morning and the moment.";
  }
  else if (randomNumber === 406) {
    activeQuoteText = "Your worth is not a variable that changes based on how much validation you receive from the people around you.";
  }
  else if (randomNumber === 407) {
    activeQuoteText = "The quiet moments of reflection are often where the loudest truths and the best insights find their way to us.";
  }
  else if (randomNumber === 408) {
    activeQuoteText = "Do not let the speed of the world dictate the pace of your heart; some of the best things take time to bloom.";
  }
  else if (randomNumber === 409) {
    activeQuoteText = "You can be deeply grateful for where you are while simultaneously working hard for the destination you want to reach.";
  }
  else if (randomNumber === 410) {
    activeQuoteText = "The shadows of yesterday will always vanish the moment you choose to step completely into the light of today.";
  }
  else if (randomNumber === 411) {
    activeQuoteText = "Kindness extended to an adversary is not a sign of weakness, but the ultimate demonstration of inner strength.";
  }
  else if (randomNumber === 412) {
    activeQuoteText = "You do not need to have all the answers mapped out before you find the courage to begin your great adventure.";
  }
  else if (randomNumber === 413) {
    activeQuoteText = "The world will tell you to blend in, but your soul knows that you were created to stand out and speak your truth.";
  }
  else if (randomNumber === 414) {
    activeQuoteText = "Every mistake is a gentle guide showing you exactly where you need to adjust your direction and try once more.";
  }
  else if (randomNumber === 415) {
    activeQuoteText = "Your mind is a garden, and the thoughts you choose to cultivate will determine the harvest you reap in your life.";
  }
  else if (randomNumber === 416) {
    activeQuoteText = "Do not carry the baggage of old expectations into a new season that requires you to travel light and free.";
  }
  else if (randomNumber === 417) {
    activeQuoteText = "The most authentic form of courage is showing up as yourself even when it would be easier to wear a mask.";
  }
  else if (randomNumber === 418) {
    activeQuoteText = "A beautiful life is not found by searching across the globe, but by creating peace right where you stand.";
  }
  else if (randomNumber === 419) {
    activeQuoteText = "You are under no obligation to remain the exact same person you were just an hour ago; growth is always allowed.";
  }
  else if (randomNumber === 420) {
    activeQuoteText = "The stars require a backdrop of deep darkness to show their true brilliance; your struggles work the same way.";
  }
  else if (randomNumber === 421) {
    activeQuoteText = "Do not trade your long-term peace of mind for short-term comfort that leaves your soul feeling empty inside.";
  }
  else if (randomNumber === 422) {
    activeQuoteText = "The best chapters of your journey have not been written yet; keep turning the pages with hope and curiosity.";
  }
  else if (randomNumber === 423) {
    activeQuoteText = "You are the author of your own story, so do not let anyone else hold the pen or dictate the final words.";
  }
  else if (randomNumber === 424) {
    activeQuoteText = "The energy you put out into the world has a beautiful way of finding its path right back to your own doorstep.";
  }
  else if (randomNumber === 425) {
    activeQuoteText = "When the noise of the crowd gets too loud, the wisest choice you can make is to return to your own quiet truth.";
  }
  else if (randomNumber === 426) {
    activeQuoteText = "You cannot catch the wind of opportunity if your sails are still tied tightly to the docks of your past comfort.";
  }
  else if (randomNumber === 427) {
    activeQuoteText = "True wealth is measured by the number of things you possess that money could never buy or replace in a lifetime.";
  }
  else if (randomNumber === 428) {
    activeQuoteText = "Do not wait for the perfect conditions to start building your dream; the perfect time will always be right now.";
  }
  else if (randomNumber === 429) {
    activeQuoteText = "The capacity to feel deeply is not a flaw; it is the very thing that allows you to connect with the world around you.";
  }
  else if (randomNumber === 430) {
    activeQuoteText = "You must learn to forgive yourself for the things you did not know before you had the experience to guide you.";
  }
  else if (randomNumber === 431) {
    activeQuoteText = "An open heart will always attract the right people, even if it occasionally takes some bumps along the journey.";
  }
  else if (randomNumber === 432) {
    activeQuoteText = "The greatest lessons are rarely learned during seasons of ease; they are forged in the fire of our challenges.";
  }
  else if (randomNumber === 433) {
    activeQuoteText = "Do not let the small minds of others convince you that your dreams are too large or impossible to achieve.";
  }
  else if (randomNumber === 434) {
    activeQuoteText = "Your presence in this world matters more than you know, and your unique light cannot be replicated by anyone.";
  }
  else if (randomNumber === 435) {
    activeQuoteText = "The standard of a good day is not how much you accomplished, but how much grace and kindness you shared with others.";
  }
  else if (randomNumber === 436) {
    activeQuoteText = "You do not need to earn the right to rest; taking care of your soul is a necessity, not a reward for labor.";
  }
  else if (randomNumber === 437) {
    activeQuoteText = "The seeds of greatness are often planted in the soil of quiet perseverance when nobody is around to applaud.";
  }
  else if (randomNumber === 438) {
    activeQuoteText = "Do not be afraid of a fresh start; it is a beautiful opportunity to build something better than what was there.";
  }
  else if (randomNumber === 439) {
    activeQuoteText = "The most beautiful view comes after the hardest climb; keep your eyes on the horizon and take another step.";
  }
  else if (randomNumber === 440) {
    activeQuoteText = "You cannot control the waves of change, but you can absolutely choose how you set your sails to catch the wind.";
  }
  else if (randomNumber === 441) {
    activeQuoteText = "A gentle response has the power to disarm anger and turn a potential conflict into an opportunity for connection.";
  }
  else if (randomNumber === 442) {
    activeQuoteText = "Do not allow the opinions of casual observers to alter the profound truth of who you know yourself to be inside.";
  }
  else if (randomNumber === 443) {
    activeQuoteText = "Your journey is unique to you, so comparing your progress to someone else's path is an exercise in futility.";
  }
  else if (randomNumber === 444) {
    activeQuoteText = "The heaviest armor you wear can become the very weight that prevents you from moving forward with freedom.";
  }
  else if (randomNumber === 445) {
    activeQuoteText = "When you choose to see the good in others, you automatically begin to bring out the very best within yourself.";
  }
  else if (randomNumber === 446) {
    activeQuoteText = "You do not need an invitation to be kind, nor do you need permission to make the world a slightly better place.";
  }
  else if (randomNumber === 447) {
    activeQuoteText = "The focus of your attention determines the quality of your reality; choose to look for the light in every space.";
  }
  else if (randomNumber === 448) {
    activeQuoteText = "Do not let a single bad chapter convince you that your entire story is a failure; there are many pages left.";
  }
  else if (randomNumber === 449) {
    activeQuoteText = "The most resilient structures are those that know how to flex and bend when the high winds begin to blow.";
  }
  else if (randomNumber === 450) {
    activeQuoteText = "You have within you an untapped well of resilience that will surprise you whenever life demands your strength.";
  }
  else if (randomNumber === 451) {
    activeQuoteText = "The simple joy of being alive can get lost in the pursuit of more; take a moment to look around and just appreciate.";
  }
  else if (randomNumber === 452) {
    activeQuoteText = "Do not fear the dark times, for they are often the exact moments when the roots of your character grow deep.";
  }
  else if (randomNumber === 453) {
    activeQuoteText = "Your worth is entirely independent of your productivity; you are valuable simply because you exist in this world.";
  }
  else if (randomNumber === 454) {
    activeQuoteText = "The greatest thing you can do for your future self is to make choices today that build a foundation of peace.";
  }
  else if (randomNumber === 455) {
    activeQuoteText = "A compassionate heart is a beacon of hope in a world that can sometimes feel cold and indifferent to pain.";
  }
  else if (randomNumber === 456) {
    activeQuoteText = "Do not let the fear of what could go wrong keep you from imagining everything that could go absolutely right.";
  }
  else if (randomNumber === 457) {
    activeQuoteText = "The most profound discoveries are often made when you step completely off the beaten path and follow your heart.";
  }
  else if (randomNumber === 458) {
    activeQuoteText = "You have the power to redefine your narrative at any given moment; no old pattern has a permanent hold on you.";
  }
  else if (randomNumber === 459) {
    activeQuoteText = "The measure of growth is not perfection, but the ability to look back and realize you no longer react the same way.";
  }
  else if (randomNumber === 460) {
    activeQuoteText = "Do not let the words of an angry moment ruin a relationship that took years of love and trust to build up.";
  }
  else if (randomNumber === 461) {
    activeQuoteText = "The truest form of wisdom is knowing when to speak your mind and when to let silence do the heavy lifting.";
  }
  else if (randomNumber === 462) {
    activeQuoteText = "Your life is an echo; what you send out into the universe always finds a creative way to return to its source.";
  }
  else if (randomNumber === 463) {
    activeQuoteText = "Do not allow the small frustrations of a single morning to shadow the endless possibilities of the whole day.";
  }
  else if (randomNumber === 464) {
    activeQuoteText = "The only true limits on your life are the boundaries you accept inside the confines of your own imagination.";
  }
  else if (randomNumber === 465) {
    activeQuoteText = "A strong spirit can navigate the roughest terrain with a sense of grace that inspires everyone along the way.";
  }
  else if (randomNumber === 466) {
    activeQuoteText = "You do not need to change the entire world to be significant; changing one life for the better is a grand victory.";
  }
  else if (randomNumber === 467) {
    activeQuoteText = "The beauty of life is often hidden in the mundane details that we miss when we are rushing toward the future.";
  }
  else if (randomNumber === 468) {
    activeQuoteText = "Do not let your inner flame be extinguished by the cold indifference of people who do not understand your passion.";
  }
  else if (randomNumber === 469) {
    activeQuoteText = "The road to success is paved with milestones of persistence that were built during times of absolute doubt.";
  }
  else if (randomNumber === 470) {
    activeQuoteText = "You are far more resilient than your fears tell you; listen to your courage instead of the anxious whispers.";
  }
  else if (randomNumber === 471) {
    activeQuoteText = "A life lived with intention is a masterpiece in progress, regardless of how messy the studio looks right now.";
  }
  else if (randomNumber === 472) {
    activeQuoteText = "Do not focus on how much further you have to travel; take pride in how many difficult miles are behind you.";
  }
  else if (randomNumber === 473) {
    activeQuoteText = "The quiet confidence of knowing who you are will always outlast the loud arrogance of trying to prove something.";
  }
  else if (randomNumber === 474) {
    activeQuoteText = "You cannot find clarity while standing in the middle of a storm; step back, breathe deeply, and let things settle.";
  }
  else if (randomNumber === 475) {
    activeQuoteText = "The gift of forgiveness is not something you grant to help others; it is the key that unlocks your own cage.";
  }
  else if (randomNumber === 476) {
    activeQuoteText = "Do not let your happiness be dependent on external events that can change with the shifting of the wind.";
  }
  else if (randomNumber === 477) {
    activeQuoteText = "The heart that is full of gratitude has no room for the weeds of bitterness and envy to take root and grow.";
  }
  else if (randomNumber === 478) {
    activeQuoteText = "You possess a unique perspective that the world desperately needs; do not rob us of your voice and insight.";
  }
  else if (randomNumber === 479) {
    activeQuoteText = "The best way to honor your dreams is to take a small, practical action in their direction every single day.";
  }
  else if (randomNumber === 480) {
    activeQuoteText = "Do not expect everyone to understand your journey, especially those who have never walked a mile in your shoes.";
  }
  else if (randomNumber === 481) {
    activeQuoteText = "The most impactful leaders are those who listen twice as much as they speak and lead with absolute empathy.";
  }
  else if (randomNumber === 482) {
    activeQuoteText = "You are capable of handling whatever this day brings, because your past has already proven your deep strength.";
  }
  else if (randomNumber === 483) {
    activeQuoteText = "The true essence of joy is found not in the acquisition of wealth, but in the appreciation of simple moments.";
  }
  else if (randomNumber === 484) {
    activeQuoteText = "Do not let the complexity of your goals paralyze you from taking the first simple step toward achievement.";
  }
  else if (randomNumber === 485) {
    activeQuoteText = "The bond of true connection can cross oceans and withstand years because it is anchored in mutual respect.";
  }
  else if (randomNumber === 486) {
    activeQuoteText = "You do not have to apologize for protecting your boundaries; peace is an essential asset that requires defense.";
  }
  else if (randomNumber === 487) {
    activeQuoteText = "The dynamic nature of life means that every single ending is simply a secret beginning waiting to be noticed.";
  }
  else if (randomNumber === 488) {
    activeQuoteText = "Do not let an old disappointment keep you from trusting the beautiful opportunities arriving in your life now.";
  }
  else if (randomNumber === 489) {
    activeQuoteText = "The most beautiful souls are those who have known adversity and emerged with a deeper capacity for kindness.";
  }
  else if (randomNumber === 490) {
    activeQuoteText = "You are not obligated to fix every broken thing you encounter; sometimes your only job is to walk in peace.";
  }
  else if (randomNumber === 491) {
    activeQuoteText = "The truth of your character is revealed in how you treat individuals who can do absolutely nothing for you.";
  }
  else if (randomNumber === 492) {
    activeQuoteText = "Do not let the temporary rain convince you that the sun has forgotten its way back to your part of the sky.";
  }
  else if (randomNumber === 493) {
    activeQuoteText = "The path of self-discovery requires us to leave behind the safety of our old identities and embrace the new.";
  }
  else if (randomNumber === 494) {
    activeQuoteText = "You are far more than the sum of your achievements or failures; you are a living breathing human miracle.";
  }
  else if (randomNumber === 495) {
    activeQuoteText = "The quiet strength of persistence will eventually wear down the most formidable obstacles you face in life.";
  }
  else if (randomNumber === 496) {
    activeQuoteText = "Do allow a critical voice to reside rent-free in your mind; fill that valuable space with kind thoughts.";
  }
  else if (randomNumber === 497) {
    activeQuoteText = "The greatest form of self-care is choosing to speak to yourself with the same love you give to your friends.";
  }
  else if (randomNumber === 498) {
    activeQuoteText = "You cannot purchase a meaningful life, but you can build one through daily acts of integrity and service.";
  }
  else if (randomNumber === 499) {
    activeQuoteText = "The horizon is constantly moving forward, inviting us to shed our old fears and walk into a brand new dawn.";
  }
  else if (randomNumber === 500) {
    activeQuoteText = "Do not let the standards of a commercial world dictate what brings genuine fulfillment to your unique soul.";
  }

  // Show plain quote no styling
  document.getElementById("quote-display").innerHTML = activeQuoteText;

  // Clear/Reset input area
  document.getElementById("quote-input").value = "";
  document.getElementById("quote-input").disabled = false;
  document.getElementById("quote-input").focus();
  
  // Clear/Reset stats 
  document.getElementById("wpm").innerHTML = 0;
  document.getElementById("accuracy").innerHTML = 100; 
  document.getElementById("timer").innerHTML = "0";
  
  // Turn on the Timer
  startTime = new Date();
  clearInterval(gameTimerInstance);
  gameTimerInstance = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (gameIsPlaying === 0) {
    return;
  }

  let secondsPassed = Math.floor((new Date() - startTime) / 1000);
  document.getElementById("timer").innerHTML = secondsPassed ;
  
  if (secondsPassed > 0) {
    let wordsPerMinuteValue = Math.round((charactersTypedCount / 5) / (secondsPassed / 60));
    document.getElementById("wpm").innerHTML = wordsPerMinuteValue;
  }
}

function Type() {
  if (gameIsPlaying === 0) {
    return;
  }

  // Get what the user typed
  let userInputText = document.getElementById("quote-input").value;
  charactersTypedCount = userInputText.length;

  // If the input box is empty, reset the screen text color and stop early
  if (charactersTypedCount === 0) {
    document.getElementById("accuracy").innerHTML = 100;
    document.getElementById("quote-display").innerHTML = activeQuoteText;
    return;
  }

  // Check for typos
  let correctLettersCount = 0;
  let textIsMatchingPerfectly = 1; // 1 means good so far, 0 means there was a typo
  
  // Checks at the user input for typos
  for (let currentUserLetter of userInputText) {
    let currentQuoteLetter = "";
    let skipCounter = 0;
    for (let temporaryLetter of activeQuoteText) {
      if (skipCounter === correctLettersCount) {
        currentQuoteLetter = temporaryLetter;
      }
      skipCounter = skipCounter + 1;
    }

    if (currentUserLetter === currentQuoteLetter) {
      if (textIsMatchingPerfectly === 1) {
        correctLettersCount = correctLettersCount + 1;
      }
    }
    if (currentUserLetter !== currentQuoteLetter) {
      textIsMatchingPerfectly = 0;
    }
  }

  // Mistake Counter check if the last character typed matches the quote character at that position
  let lastUserLetter = "";
  for (let temporaryLetter of userInputText) {
    lastUserLetter = temporaryLetter; 
  }
  
  let targetQuoteLetter = "";
  let mistakeCheckCounter = 0;
  for (let temporaryLetter of activeQuoteText) {
    if (mistakeCheckCounter === (charactersTypedCount - 1)) {
      targetQuoteLetter = temporaryLetter;
    }
    mistakeCheckCounter = mistakeCheckCounter + 1;
  }

  if (lastUserLetter !== targetQuoteLetter) {
    totalMistakeCount = totalMistakeCount + 1;
  }

  // Accuracy Calculation
  let totalAttemptsCount = charactersTypedCount + totalMistakeCount;
  let accuracyPercentageValue = Math.round(((totalAttemptsCount - totalMistakeCount) / totalAttemptsCount) * 100);
  document.getElementById("accuracy").innerHTML = accuracyPercentageValue;

  // Variables to style characters based on typos vs. correct
  let matchingTextSegment = "";
  let errorTextSegment = "";
  let remainingTextSegment = "";

  // Go through the whole quote to check for typos
  let quoteCharacterIndex = 0;
  for (let singleQuoteLetter of activeQuoteText) {

    if (quoteCharacterIndex < correctLettersCount) {
      // The letter is correct
      matchingTextSegment = matchingTextSegment + singleQuoteLetter;
    }
    if (quoteCharacterIndex >= correctLettersCount) {
      if (quoteCharacterIndex < charactersTypedCount) {
        // The letter is a typo
        errorTextSegment = errorTextSegment + singleQuoteLetter;
      }
    }
    if (quoteCharacterIndex >= charactersTypedCount) {
      // This letter has not been typed yet
      remainingTextSegment = remainingTextSegment + singleQuoteLetter;
    }

    quoteCharacterIndex = quoteCharacterIndex + 1;
  }

  // Variable to store the styled text from below
  let finalHtmlOutput = "";
  
  // Style based on correct or wrong character
  if (correctLettersCount > 0) {
    finalHtmlOutput = finalHtmlOutput + "<span style='color: #a6e3a1;;'>" + matchingTextSegment + "</span>";
  }
  if (errorTextSegment.length > 0) {
    finalHtmlOutput = finalHtmlOutput + "<span style='color:  #f38ba8; background-color: rgba(243, 139, 168, 0.2);'>" + errorTextSegment + "</span>";
  }
  finalHtmlOutput = finalHtmlOutput + remainingTextSegment;

  // Show the final text with styling 
  document.getElementById("quote-display").innerHTML = finalHtmlOutput;

  // Check Win Condition
  if (activeQuoteText === userInputText) {
    gameIsPlaying = 0;
    clearInterval(gameTimerInstance);
    document.getElementById("quote-input").disabled = true;

  // Update number of quotes done
    let msg = `Great you finished ${completedQuotesCount} of 500 quotes! keep going 🔥`; 
    document.getElementById("message").innerText = msg;
    completedQuotesCount++;
  }
} 