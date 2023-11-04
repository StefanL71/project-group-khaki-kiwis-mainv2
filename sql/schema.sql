BEGIN TRANSACTION;
DROP TABLE IF EXISTS "Users";
CREATE TABLE IF NOT EXISTS "Users" (
	"user_id"	INTEGER NOT NULL,
	"fname"	VARCHAR(32) NOT NULL,
	"lname"	VARCHAR(32) NOT NULL,
	"username"	VARCHAR(32) NOT NULL UNIQUE,
	"password"	VARCHAR(20) NOT NULL,
	"dateOfBirth"	DATE NOT NULL,
	"description"	TEXT NOT NULL,
	"avatar"	VARCHAR(255) NOT NULL,
	PRIMARY KEY("user_id")
);
DROP TABLE IF EXISTS "Blogs";
CREATE TABLE IF NOT EXISTS "Blogs" (
	"blog_id"	INTEGER NOT NULL,
	"user_id"	INTEGER NOT NULL,
	"title"	VARCHAR(50),
	"content"	TEXT NOT NULL,
	"creation_date"	DATE,
	PRIMARY KEY("blog_id"),
	FOREIGN KEY("user_id") REFERENCES "Users"("user_id")
);
DROP TABLE IF EXISTS "Comments";
CREATE TABLE IF NOT EXISTS "Comments" (
	"comment_id"	INTEGER NOT NULL,
	"user_id"	INTEGER NOT NULL,
	"blog_id"	INTEGER NOT NULL,
	"comment_text"	TEXT,
	"comment_date"	DATE,
	PRIMARY KEY("comment_id"),
	FOREIGN KEY("blog_id") REFERENCES "Blogs"("blog_id"),
	FOREIGN KEY("user_id") REFERENCES "Users"("user_id")
);
DROP TABLE IF EXISTS "Photos";
CREATE TABLE IF NOT EXISTS "Photos" (
	"photo_id"	INTEGER NOT NULL,
	"blog_id"	INTEGER NOT NULL,
	"description"	TEXT,
	"image"	VARCHAR(255) NOT NULL,
	PRIMARY KEY("photo_id"),
	FOREIGN KEY("blog_id") REFERENCES "Blogs"("blog_id")
);
DROP TABLE IF EXISTS "Likes";
CREATE TABLE IF NOT EXISTS "Likes" (
	"like_id"	INTEGER NOT NULL,
	"user_id"	INTEGER NOT NULL,
	"blog_id"	INTEGER NOT NULL,
	PRIMARY KEY("like_id"),
	FOREIGN KEY("blog_id") REFERENCES "Blogs"("blog_id"),
	FOREIGN KEY("user_id") REFERENCES "Users"("user_id")
);
INSERT INTO "Users" VALUES (1,'John','Doe','johndoe','password123','10-11-1983','Lorem ipsum get down get down sit amizzle, consectetuer adipiscing elizzle. Bling bling sapien velizzle, yo mamma volutpizzle, suscipit quis, gravida vizzle, arcu. Pellentesque tortor. Sizzle eros. Fusce izzle dolizzle dapibus fizzle tempizzle own yo. Maurizzle for sure fo izzle turpizzle. Izzle in shit. For sure eleifend rhoncizzle nizzle. In hac habitasse platea dictumst. Donec dapibizzle. Curabitur tellizzle bling bling, check out this eu, mattizzle go to hizzle, vitae, nunc. Shizzlin dizzle suscipit. Integizzle semper im in the shizzle sizzle owned.','avatar1.jpg');
INSERT INTO "Users" VALUES (2,'Jenny','Smith','jennysmith','password456','10-12-1971','izzle, semper shiz, sapizzle. Ut things ghetto vel ipsizzle. Sed ante sure, suscipizzle vitae, vestibulum et, rutrum crazy, i saw beyonces tizzles and my pizzle went crizzle. Mauris gangster boom shackalack. Sizzle fo shizzle my nizzle ma nizzle sit amet risus fizzle congue.','avatar2.jpg');
INSERT INTO "Users" VALUES (3,'Bob','McDonald','bobmcdonald','pass789','04-07-2001','Donec dolizzle. Pot faucibizzle. Maecenizzle rizzle go to hizzle quam. Fo rutrum aliquizzle orci. Sed check out this. Mauris sizzle nulla, venenatis eu, scelerisque vizzle, blandizzle ac, magna.','avatar3.jpg');
INSERT INTO "Users" VALUES (4,'stefan','stefan','stefan','stefan123','01/01/2005','Hi, I''m Stefan, startup founder and the next Elon Musk. ','8.png');
INSERT INTO "Users" VALUES (5,'rob','rob','rob','rob12345','01/01/2000','Hi, I''m Rob. Computer wizz and foodie. ','2.png');
INSERT INTO "Users" VALUES (6,'joonki','joonki','joonki','joonki123','01/01/2005','I''m Joonki, AI enthusiast, making a difference in the world. ','4.png');
INSERT INTO "Users" VALUES (7,'georgina','georgina','georgina','georgina123','01/01/2005','Kia ora everyone, I''m Georgina. Teacher passionate about languages, travel and corgis. ','2.png');
INSERT INTO "Users" VALUES (8,'shadow','shadow','shadow','umm12345','01/01/2005','This is the test account for the best application and group. Enjoy using our app ','1.png');
INSERT INTO "Users" VALUES (9,'khaki','kiwis','khakikiwis','Khakikiwis1!','01/01/2005','This is the test account for the best application and group. Enjoy using our app ','2.png');
INSERT INTO "Blogs" VALUES (1,1,'First Blog','Croissant croissant sesame snaps toffee soufflé pie tart donut. Halvah jelly-o danish jelly candy canes dessert. Chocolate ice cream pudding marzipan cake biscuit tootsie roll bear claw topping. Sweet roll danish powder cake cake wafer powder. Chupa chups jelly-o jelly beans carrot cake biscuit. Cheesecake halvah jelly cotton candy marshmallow cheesecake tiramisu jelly sweet roll. Jelly beans biscuit tiramisu carrot cake halvah pudding. Tiramisu dragée pastry pudding cupcake gingerbread dragée candy. Fruitcake muffin candy canes jelly beans gingerbread dragée powder chupa chups bear claw.

Jelly chupa chups croissant cupcake candy canes soufflé bonbon jelly. Tootsie roll jelly beans cheesecake jujubes sesame snaps. Candy canes gummi bears danish sesame snaps pudding apple pie biscuit. Chocolate pie ice cream gingerbread marzipan macaroon. Marshmallow soufflé candy jelly dragée chocolate bar. Toffee biscuit caramels cheesecake chocolate halvah. Tiramisu wafer sweet roll topping cheesecake jelly beans. Chocolate bar ice cream bonbon marshmallow chocolate cake pastry danish. Brownie candy canes gummi bears gummi bears marzipan sugar plum chocolate bonbon muffin. Sugar plum cheesecake sweet sesame snaps gummi bears.

Tootsie roll dessert jelly tootsie roll pudding muffin shortbread. Tart cheesecake danish soufflé pastry. Sugar plum halvah liquorice caramels chocolate donut sweet cookie. Pastry cookie ice cream icing gingerbread. Croissant liquorice sesame snaps soufflé gummi bears cupcake apple pie donut cupcake. Sesame snaps marzipan caramels chupa chups macaroon liquorice.','23-10-2023');
INSERT INTO "Blogs" VALUES (2,2,'Second Blog','Gummies topping wafer wafer gingerbread biscuit carrot cake cupcake. Cotton candy soufflé cotton candy marzipan marzipan sweet roll. Jelly beans powder chocolate cake gingerbread powder muffin marshmallow. Carrot cake croissant chupa chups donut wafer. Wafer cheesecake biscuit toffee cheesecake ice cream. Danish brownie gingerbread croissant muffin brownie jelly-o ice cream. Apple pie fruitcake sugar plum croissant ice cream cake halvah. Brownie pie pie pudding toffee toffee. Cupcake gingerbread sweet marshmallow cake pie.

Sugar plum sweet roll jujubes chocolate cake jelly-o. Pie marshmallow cookie cake candy canes tart biscuit jelly beans jelly-o. Gingerbread candy canes powder gingerbread carrot cake ice cream cookie gummies. Dragée candy lollipop macaroon soufflé. Toffee fruitcake topping jelly beans lemon drops. Oat cake sweet marshmallow pudding cake danish cheesecake cake carrot cake. Cupcake oat cake cheesecake jelly-o candy dragée bonbon. Brownie marzipan gummi bears bear claw bear claw pie. Pastry jelly-o marzipan marzipan fruitcake oat cake icing liquorice. Cake chocolate donut ice cream jelly oat cake jelly beans carrot cake.

Lollipop tart oat cake pastry jelly chupa chups. Muffin cupcake cupcake lollipop pudding bonbon. Jujubes pie pastry gummi bears bonbon brownie cheesecake chocolate bar liquorice. Shortbread dragée wafer carrot cake ice cream candy soufflé. Caramels apple pie dragée apple pie oat cake tootsie roll icing muffin. Cookie marzipan macaroon muffin gummi bears cake biscuit cotton candy. Gummies croissant gummi bears sweet cookie pie.

Caramels candy shortbread pudding jelly-o tootsie roll chocolate cake cake. Lemon drops sweet roll cookie bear claw croissant chocolate bar cheesecake halvah. Cake cheesecake brownie cheesecake chocolate cake gummies muffin. Chocolate bar chocolate cake biscuit tart ice cream bear claw toffee. Sesame snaps biscuit gingerbread shortbread jujubes sweet roll cake sweet. Lollipop chocolate cake cake biscuit jujubes.','25-10-2023');
INSERT INTO "Blogs" VALUES (3,1,'Another Blog','Oat cake tiramisu candy canes wafer gummi bears. Brownie sesame snaps bear claw danish chupa chups lollipop icing cake cheesecake. Jelly toffee jelly muffin sweet ice cream.

Candy gummi bears cake cookie pudding tart. Brownie pastry candy fruitcake dragée apple pie sweet roll. Tart cookie gummies biscuit topping candy canes jelly beans donut jujubes. Lemon drops powder jelly-o liquorice powder chupa chups ice cream.

Shortbread bear claw croissant icing oat cake topping cupcake cake chocolate. Liquorice cookie jelly beans chocolate bar chocolate cake cheesecake gummi bears. Shortbread jelly-o cake danish wafer soufflé macaroon. Soufflé macaroon shortbread pie sugar plum pudding lemon drops cupcake.

Chocolate cake bonbon tart brownie tootsie roll bear claw. Marshmallow gummies jelly-o marshmallow icing sweet roll lemon drops. Macaroon ice cream cookie jelly wafer cotton candy. Fruitcake marshmallow croissant sesame snaps oat cake sweet cheesecake shortbread icing.','25-10-2023');
INSERT INTO "Comments" VALUES (1,2,1,'Great first blog!','25-10-2023');
INSERT INTO "Comments" VALUES (2,3,1,'I agree! A great writer.','25-10-2023');
INSERT INTO "Comments" VALUES (3,1,2,'Thanks for your comment!','24-10-2023');
INSERT INTO "Comments" VALUES (4,2,3,'Nice blog. Keep it up!','23-10-23');
INSERT INTO "Photos" VALUES (1,1,'Image 1 for the first blog','https://placebear.com/g/200/300');
INSERT INTO "Photos" VALUES (2,3,'Another image for a blog','image2.jpg');
INSERT INTO "Likes" VALUES (1,1,2);
INSERT INTO "Likes" VALUES (2,2,1);
INSERT INTO "Likes" VALUES (3,3,3);
INSERT INTO "Likes" VALUES (4,1,3);
COMMIT;
