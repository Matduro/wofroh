INSERT INTO users (
name, email, username, password) 
VALUES (
'Devin Sanders', 'tristanjacobs@gmail.com', 'Colonel-Sanders', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (
name, email, username, password) 
VALUES (
'Iva Harrison', 'allisonjackson@mail.com', 'Ivar-The-Strongest','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (
name, email, username, password)  
VALUES (
'Lloyd Jefferson', 'asherpoole@gmx.com', 'Jiffy','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (
name, email, username, password)  
VALUES (
'Andy Lindsay', 'pogchamp@gmx.com', 'Incredible-Hulk','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO workouts (
name, workout_time)
VALUES (
  'Angry Eugene', 60
  );
INSERT INTO workouts (
name, workout_time)
VALUES (
  'Goggins Joggin', 60
  );
INSERT INTO workouts (
name, workout_time)
VALUES (
  'Jedi Master', 60
  );


INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'Legs');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'Core');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/700446/pexels-photo-700446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'Arms');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/5067739/pexels-photo-5067739.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'Shoulders');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/50597/man-male-boy-a-person-50597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'Back');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/6009290/pexels-photo-6009290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'Cardio');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/4720326/pexels-photo-4720326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'Chest');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'Full Body');
INSERT INTO muscle_groups (
  muscle_url, title)
  VALUES (
    'https://images.pexels.com/photos/3764396/pexels-photo-3764396.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'Stretching');


INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
3, 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Falk%2C_Benjamin_J._%281853-1925%29_-_Eugen_Sandow_%281867-1925%29.jpg', 'Bicep Curls', 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo', 'info should be here', 4, 36, 3, 1, 4);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
3, 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpY2Vwc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Tricep Dips', 'https://www.youtube.com/watch?v=6kALZikXxLc', 'info should be here', 4, 36, 3, 1, 4);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
3, 'https://images.unsplash.com/photo-1543975200-8e313fb04fc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmljZXAlMjBjdXJsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Hammer curls', 'https://www.youtube.com/watch?v=zC3nLlEvin4', 'info should be here', 4, 36, 3, 1, 1);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
3, 'https://images.unsplash.com/photo-1518644961665-ed172691aaa1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVzaHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Rolling Pushup', 'https://www.youtube.com/watch?v=t66YJ0e2JIs', 'info should be here', 6, 30, 3, 3, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
3, 'https://images.unsplash.com/photo-1603809896289-e3c94ad1c31a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdyaXN0JTIwd29ya291dHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Wrist Flexion', 'https://www.youtube.com/watch?v=nrQIgBFc4P8', 'info should be here', 5, 50, 4, 2, 3);


INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
7, 'https://www.elitefts.com/wp/wp-content/uploads/2012/03/IMG_1456-600x300.jpg', 'Bench Press', 'https://www.youtube.com/watch?v=gRVjAtPip0Y', 'info should be here', 4, 36, 3, 3, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
7, 'https://images.unsplash.com/photo-1514512364185-4c2b0985be01?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHVzaCUyMHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Push-ups', 'https://www.youtube.com/watch?v=IODxDxX7oi4', 'info should be here', 8, 45, 4, 2, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
7, 'https://images.unsplash.com/photo-1599744331048-d58b430fb098?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVzaCUyMHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Decline Push-ups', 'https://www.youtube.com/watch?v=SKPab2YC8BE', 'info should be here', 6, 36, 4, 4, 4);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
7, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pressing-on-and-increasing-his-stamina-royalty-free-image-1592344950.jpg', 'Diamond Push-ups', 'https://www.youtube.com/watch?v=J0DnG1_S92I', 'info should be here', 6, 36, 3, 2, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating) 
VALUES (
7, 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVzaCUyMHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Wide Push-ups', 'https://www.youtube.com/watch?v=rr6eFNNDQdU', 'info should be here', 6, 36, 3, 5, 5);


INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
2, 'https://ericcooperfitness.com/blog/wp-content/uploads/2017/09/eric_ball-copy-copy2-copy-2.jpg', 'Medicine Ball Wood Chopper', 'https://www.youtube.com/watch?v=FA3S8CrSOTw', 'info should be here', 4, 50, 3, 4, 3);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
2, 'https://media.gettyimages.com/photos/the-core-challenge-picture-id498584214?k=6&m=498584214&s=612x612&w=0&h=-uJlPRLuOIjUg7ou9TmvMVmrAv6OjrfWCU4McRtbGlY=', 'Sit-ups', 'https://www.youtube.com/watch?v=-WSon5E798w', 'info should be here', 9, 100, 3, 5, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
2, 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2017/06/bicycle-crunch.jpg?itok=FqLjr7Yf&timestamp=1498746114', 'Bicycles', 'https://www.youtube.com/watch?v=9FGilxCbdz8', 'info should be here', 6, 100, 3, 5, 2);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
2, 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmslMjBleGVyY2lzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Plank', 'https://www.youtube.com/watch?v=ASdvN_XEl_c', 'info should be here', 3, 3, 3, 5, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
2, 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHB1c2glMjB1cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Mountain Climbers', 'https://www.youtube.com/watch?v=NjmU34zhXvA', 'info should be here', 6, 50, 3, 4, 5);


INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
1, 'https://images.unsplash.com/flagged/photo-1566064352554-f36ef0ef23b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1YXQlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Squats', 'https://www.youtube.com/watch?v=X0qC1k0Zi6k', 'info should be here', 5, 36, 3, 5, 4);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
1, 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMHNpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 'Wall-sits', 'https://www.youtube.com/watch?v=y-wV4Venusw', 'info should be here', 5, 3, 3, 5, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
1, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bm-meghan-firstset-single-leg-hip-abduction-1599847140.jpg?crop=0.803xw:0.601xh;0.0994xw,0.382xh&resize=1200:*', 'Pistol Squats', 'https://www.youtube.com/watch?v=vq5-vdgJc0I', 'info should be here', 7, 24, 3, 3, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
1, 'https://images.unsplash.com/photo-1595571024048-45a59177f538?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVuZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Lunges', 'https://www.youtube.com/watch?v=3XDriUn0udo', 'info should be here', 7, 50, 3, 1, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
1, 'https://3i133rqau023qjc1k3txdvr1-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/Squat-Jump_Exercise.jpg', 'Jumping Squats', 'https://www.youtube.com/watch?v=A-cFYWvaHr0', 'info should be here', 8, 30, 3, 5, 5);


INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
4, 'https://www.bodybuilding.com/images/2018/august/7-rear-delt-raise-variations-for-maximum-growth-header-400x225.jpg', 'Dumbbell Rear Delt Fly', 'https://www.youtube.com/watch?v=lPt0GqwaqEw', 'info should be here', 4, 12, 3, 4, 3);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
4, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/side-plank-1549646915.jpg', 'Side Plank', 'https://www.youtube.com/watch?v=XeN4pEZZJNI', 'info should be here', 3, 3, 3, 4, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
4, 'https://www.verywellfit.com/thmb/HUHzpgHArFEVTas_LlWfcNdUUuM=/4500x2531/smart/filters:no_upscale()/About-A52-CleanAndPress-703copy-570574d75f9b581408c96262.jpg', 'Shoulder Press', 'https://www.youtube.com/watch?v=M2rwvNhTOu0', 'info should be here', 4, 36, 3, 4, 2;
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
4, 'https://www.jefit.com/images/exercises/800_600/3464.jpg', 'Dumbell Lateral Raise', 'https://cdn.prod.openfit.com/uploads/2017/08/29115457/Open_Fit_lateral_raise_770.jpg', 'info should be here', 5, 36, 3, 3, 4);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
4, 'https://s3.amazonaws.com/prod.skimble/assets/1421534/image_iphone.jpg', 'Scarecrow Press', 'https://www.youtube.com/watch?v=pieRABQ0qHc', 'info should be here', 5, 36, 3, 4, 2);


INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
6, 'https://www.researchgate.net/profile/Mohammed-Abou-Elmagd/publication/341734848/figure/fig1/AS:896516470362114@1590757591713/Sample-of-Jumping-Jacks-Exercise-4.png', 'Jumping Jacks', 'https://www.youtube.com/watch?v=E1MLfbD5i8A', 'info should be here', 3, 50, 3, 3, 3);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
6, 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2020/10/Best_Jump_Ropes-1.jpg', 'Jump rope', 'https://www.youtube.com/watch?v=FJmRQ5iTXKE', 'info should be here', 3, 50, 3, 5, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
6, 'http://kumu.brocku.ca/images/kine4p22d022015/9/9e/Lateral_shuffle.jpg', 'Lateral Shuffles', 'https://www.youtube.com/watch?v=mziPKITnPeQ', 'info should be here', 4, 20, 3, 4, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
6, 'https://www.spotebi.com/wp-content/uploads/2014/10/run-in-place-exercise-illustration.jpg', 'Jogging In Place', 'https://www.youtube.com/watch?v=xmkYBO85leM', 'info should be here', 6, 100, 2, 4, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
6, 'https://www.nicepng.com/png/detail/401-4019839_squat-thrusts-cardio-exercise-cardio-exercise-33-bodyweight.png', 'Squat Thrusts', 'https://www.youtube.com/watch?v=fysU2ldlXSY', 'info should be here', 4, 25, 3, 4, 4);

INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
5, 'https://cdn.abmachinesguide.com/wp-content/uploads/2019/01/Hyperextension-Exercise-Without-Bench.jpg', 'Lower Back Extension', 'https://www.youtube.com/watch?v=Ikq3OCFoP7c', 'info should be here', 8, 100, 3, 4, 3);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyP7JejrlvPFpUmEoI6UhTicvUJ5PdSJWdAg&usqp=CAU', 'Single Arm Dumbbell Row', 'https://www.youtube.com/watch?v=xl1YiqQY2vA', 'info should be here', 5, 16, 3, 4, 4);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
5, 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/10/lower_back_workout_superman.jpg?itok=nlVg3YUw', 'Superman Holds', 'https://www.youtube.com/watch?v=z6PJMT2y8GQ', 'info should be here', 4, 25, 2, 5, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
5, 'https://www.indianworkouts.com/wp-content/uploads/2015/07/Bent-Over-Row.jpg', 'Band Bent-Over Row', 'https://www.youtube.com/watch?v=TE3v7CgXiiI', 'info should be here', 3, 20, 2, 4, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
5, 'https://lh3.googleusercontent.com/proxy/dqHy8KWce1ZnbwFfhZC3u4QA-pP7cia4od12kfLvnfTN4vM_AxXUXEYHxeWq_ZX0kloSvV0huQxi5S78fQm7Ey_I35-49_w2FuLWISvBAUF1d2T8cf_BD7KDYdm_09SAyyA', 'Lat Pulldown with Resistance Band', 'https://www.youtube.com/watch?v=8zv8Pray4-w', 'info should be here', 4, 15, 2, 4, 4);

INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
8, 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 'Burpies', 'https://www.youtube.com/watch?v=qLBImHhCXSw', 'info should be here', 8, 20, 3, 4, 3);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
8, 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/580x350/Pike+Roll-Out.jpg', 'Pike RollOut', 'https://www.youtube.com/watch?v=4YOKVI9aSjE', 'info should be here', 6, 10, 2, 5, 4);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
8, 'http://www.burnthefatinnercircle.com/members/images/1093.jpg', 'Bench Dips', 'https://www.youtube.com/watch?v=PjVF-FF8JkU', 'info should be here', 6, 15, 2, 5, 5);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
8, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Btmj8IX7XwSW3ySzyimkq8mLDF2Se6feCw&usqp=CAU', 'Kettlebell Swings', 'https://www.youtube.com/watch?v=YSxHifyI6s8', 'info should be here', 5, 15, 3, 4, 4);

INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
9, 'https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Sitting Hip Stretch', 'https://www.youtube.com/watch?v=4UoITjubrgE&t=2s', 'info should be here', 5, 5, 3, 4, 1);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
9, 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZXRjaGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Hamstring Stretch', 'https://www.youtube.com/watch?v=3Ymjw7TSzrE', 'info should be here', 3, 3, 3, 4, 1);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
9, 'https://images.unsplash.com/photo-1532383192429-7f602da670a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHN0cmV0Y2hpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Quad Stretch', 'https://www.youtube.com/watch?v=uRRwljV-Nlk', 'info should be here', 2, 4, 3, 4, 2);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
9, 'https://images.unsplash.com/photo-1599447332412-6bc6830c815a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0cmV0Y2hpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Lower Back Stretch', 'https://www.youtube.com/watch?v=Xm8iSSdU3I0', 'info should be here', 3, 3, 3, 4, 1);
INSERT INTO exercises (
muscle_group_id, exercise_picture_url, exercise_name, exercise_video_url, exercise_info, total_time, num_of_reps, num_of_sets, intensity, rating)
VALUES (
9, 'https://images.unsplash.com/photo-1599447332412-6bc6830c815a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0cmV0Y2hpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 'Hip Flexor Stretch', 'https://www.youtube.com/watch?v=7bRaX6M2nr8', 'info should be here', 3, 3, 3, 4, 1);



INSERT INTO workout_exercises (
excercise_id, workout_id)
VALUES (
'{1, 2}', 1);
INSERT INTO workout_exercises (
excercise_id, workout_id)
VALUES (
'{3, 4}', 2);
INSERT INTO workout_exercises (
excercise_id, workout_id)
VALUES (
'{5, 6}', 3);



INSERT INTO user_ratings (
 user_id, workout_id, workout_rating, likes, workout_score, comments)
 VALUES (
   1, 2, 5, true, 75, 'Bro, this workout plan was lit!'
);
INSERT INTO user_ratings (
 user_id, workout_id, workout_rating, likes, workout_score, comments)
 VALUES (
   2, 3, 4, true, 50, 'Bro, this workout plan was lit!'
);
INSERT INTO user_ratings(
 user_id, workout_id, workout_rating, likes, workout_score, comments)
 VALUES (
   3, 1, 5, true, 50, 'I don''t think I can take more than one workout like this per month, but wow I''ve never felt better'
);


INSERT INTO messagings (
 sender_user_id, receiver_user_id, message)
 VALUES (
   1, 2, 'Bro, this was the sickest workout of all time.'
);
INSERT INTO messagings (
 sender_user_id, receiver_user_id, message)
 VALUES (
   2, 1, 'I know right?! We''re going to make all kinds of gainz'
);


INSERT INTO user_workouts (
 user_id, workout_id, workout_completed, workout_saved)
 VALUES (
   1, 1, TRUE, FALSE
);
INSERT INTO user_workouts (
 user_id, workout_id, workout_completed, workout_saved)
 VALUES (
   2, 2, TRUE, TRUE
);
INSERT INTO user_workouts (
 user_id, workout_id, workout_completed, workout_saved)
 VALUES (
   3, 3, FALSE, FALSE
);

INSERT INTO friends (
 friend_1_id, friend_2_id)
 VALUES (
   1, 3
);
INSERT INTO friends (
 friend_1_id, friend_2_id)
 VALUES (
   2, 3
);
INSERT INTO friends (
 friend_1_id, friend_2_id)
 VALUES (
   2, 1
);