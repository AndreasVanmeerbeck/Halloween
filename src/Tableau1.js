/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');

        //ground (premier plan noir)
        this.load.image('g-stone-2', 'assets/level/ground/g-stone-2.png');
        this.load.image('g-stone-5', 'assets/level/ground/g-stone-5.png');
        this.load.image('g-water', 'assets/level/ground/g-water.png');
        this.load.image('g-mushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('g-wooden-bridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('g-left', 'assets/level/ground/g-left.png');
        this.load.image('g-stone-4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('g-box-2', 'assets/level/ground/g-box-2.png');
        this.load.image('g-grass-4', 'assets/level/ground/g-grass-4.png');
        this.load.image('g-grass-3', 'assets/level/ground/g-grass-3.png');
        this.load.image('g-spike-1', 'assets/level/ground/g-spike-1.png');
        this.load.image('g-fellen-tree-1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('z12', 'assets/level/ground/z12.png');
        this.load.image('z4', 'assets/level/ground/z4.png');
        this.load.image('z6', 'assets/level/ground/z6.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=10;i++){
            this.load.image('boy2-'+i, 'assets/Characters/boy/boy_style_4/PNG/idle/boy'+i+'.png');
        }

        for(let i=1;i<=6;i++){
            this.load.image('enemy2-'+i, 'assets/Characters/enemy2/PNG/idle/fly'+i+'.png');
        }
        for(let i=1;i<=10;i++){
            this.load.image('enemy-'+i, 'assets/Characters/enemy1/PNG/idle/enemy-'+i+'.png');
        }

        for(let i=1;i<=10;i++){
            this.load.image('Layer-'+i, 'assets/Characters/boy/boy_style_1/PNG/idle/Layer-'+i+'.png');
        }

        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent, done
        for(let i=1;i<=3;i++){
            this.load.image('filterFilm-'+i, 'assets/level/filters/film/frame-'+i+'.png');
        }

        for(let i=1;i<=3;i++){
            this.load.image('filterBloody-'+i, 'assets/level/filters/bloody/frame'+i+'.png');
        }

        for(let i=1;i<=3;i++){
            this.load.image('filterRain-'+i, 'assets/level/weather/rain/frame'+i+'.png');
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let i=1;i<=3;i++){
            this.load.image('bg-animation-'+i, 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){


        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        this.bgAnimationA = this.add.sprite(0, 0, 'bg-animation-1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film2',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'}
            ],
            frameRate: 16,
            repeat: -1
        });
        this.bgAnimationA.play('film2');


        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);

        let bg2Terrain1=this.add.image(780,200, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        bg2Terrain1.scale=0.5;

        let bg2Terrain1bis=this.add.image(1150,200, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1bis);
        bg2Terrain1bis.scale=0.7;
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree1=this.add.image(500,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1);
        bg2Tree1.scale=0.5;

        let bg2Tree1bis=this.add.image(1350,0, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1bis);
        bg2Tree1bis.scale=0.5;

        let bg2Tree3=this.add.image(780,-30, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.scale=0.8;
        bg2Tree3.angle=-7;

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-300,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bg1Terrain1=this.add.image(680,250, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        bg1Terrain1.scale=0.5;

        let bg1Terrain3bis=this.add.image(450,400, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3bis);
        bg1Terrain3bis.scale=0.5;

        let bg1tree1=this.add.image(170,-120, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1tree1);
        bg1tree1.scale=0.7;

        let bg1tree3=this.add.image(900,0, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1tree3);
        bg1tree3.scale=0.5;

        let bg1tree2=this.add.image(10,-25, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1tree2);
        bg1tree2.scale=0.5;

        let bg1Terrain1bis=this.add.image(950,275, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1bis);
        bg1Terrain1bis.scale=0.5;

        let bg1Terrain1tis=this.add.image(1450,300, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1tis);
        bg1Terrain1tis.scale=0.6;

        let bg1tree3bis=this.add.image(1050,0, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1tree3bis);
        bg1tree3bis.scale=0.7;

        let bg1tree2bis=this.add.image(1700,-25, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1tree2bis);
        bg1tree2bis.scale=0.7;

        let bg1tree2tis=this.add.image(1550,-50, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1tree2tis);
        bg1tree2tis.scale=0.7;


        //-------------ground (premier plan noir)---------------------------
        this.idle2 = this.add.sprite(130, -80, 'enemy-1').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'IdleEnemy',
            frames: this.getFrames("enemy-",10),
            frameRate: 12,
            repeat: -1
        });
        this.idle2.play('IdleEnemy');

        this.idle3 = this.add.sprite(1200, -80, 'fly').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'IdleEnemy2',
            frames: this.getFrames("enemy2-",6),
            frameRate: 12,
            repeat: -1,

        });
        this.idle3.play('IdleEnemy2');
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);

        let rock1=this.add.image(420,340, 'g-stone-2').setOrigin(0,1);
        this.groundContainer.add(rock1); // le caillou à côté du pont à gauche

        let water1=this.add.image(480,600, 'g-water').setOrigin(0,1);
        this.groundContainer.add(water1); // L'eau

        let mush1=this.add.image(190,335, 'g-mushroom1').setOrigin(0,1);
        this.groundContainer.add(mush1);
        mush1.flipX=true; // Le champi
        // herbe un peu longue
        let grass3=this.add.image(155,340,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass3);
        // herbe encore plus longue et grande
        let grass4=this.add.image(230,345,'g-grass-5').setOrigin(0,1)
        this.groundContainer.add(grass4);

        let spike1=this.add.image(480,550,'g-spike-1').setOrigin(0,1)
        this.groundContainer.add(spike1);
        spike1.scale=1.7

        let bridge=this.add.image(460,385,'g-wooden-bridge').setOrigin(0,1)
        this.groundContainer.add(bridge);

        let groundleft=this.add.image(825,750,'g-left').setOrigin(0,1)
        this.groundContainer.add(groundleft);

        let groundleft2=this.add.image(1950,770,'g-left').setOrigin(0,1)
        this.groundContainer.add(groundleft2);

        let groundmid=this.add.image(1025,750,'gMid').setOrigin(0,1)
        this.groundContainer.add(groundmid);

        let groundmid2=this.add.image(1225,750,'gMid').setOrigin(0,1)
        this.groundContainer.add(groundmid2);

        let groundmid3=this.add.image(1300,750,'gMid').setOrigin(0,1)
        this.groundContainer.add(groundmid3);

        let rock2=this.add.image(940,380,'g-stone-4').setOrigin(0,1)
        this.groundContainer.add(rock2);

        let grass5=this.add.image(910,380,'g-grass-2').setOrigin(0,1)
        this.groundContainer.add(grass5);

        let grass6=this.add.image(1025,380,'g-grass-5').setOrigin(0,1)
        this.groundContainer.add(grass6);

        let tree3=this.add.image(1000,450,'gTree1').setOrigin(0,1)
        this.groundContainer.add(tree3);
        tree3.flipX=true;
        tree3.angle=-7;

        let box1=this.add.image(575,345,'g-box-2').setOrigin(0,1)
        this.groundContainer.add(box1);
        box1.angle=5;

        let gRight=this.add.image(1500,750,'gRight').setOrigin(0,1)
        this.groundContainer.add(gRight);

        let grass4bis=this.add.image(1100,390,'g-grass-4').setOrigin(0,1)
        this.groundContainer.add(grass4bis);

        let grass3bis=this.add.image(1140,380,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass3bis);

        let grass3tis=this.add.image(1625,395,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass3tis);

        let tree2bis=this.add.image(1155,470,'gTree2').setOrigin(0,1)
        this.groundContainer.add(tree2bis);
        tree2bis.scale=0.85

        let stone5=this.add.image(1145,370,'g-stone-5').setOrigin(0,1)
        this.groundContainer.add(stone5);
        stone5.scale=1.4

        let grass2bis=this.add.image(1500,380,'g-grass-2').setOrigin(0,1)
        this.groundContainer.add(grass2bis);

        let grass2tis=this.add.image(2000,400,'g-grass-2').setOrigin(0,1)
        this.groundContainer.add(grass2tis);

        let mush1bis=this.add.image(1550,380,'g-mushroom1').setOrigin(0,1)
        this.groundContainer.add(mush1bis);
        mush1bis.scale=0.5

        let fellentree1=this.add.image(1645,370,'g-fellen-tree-1').setOrigin(0,1)
        this.groundContainer.add(fellentree1);
        fellentree1.scale=0.8
        fellentree1.angle=5

        let spike1bis=this.add.image(1590,540,'g-spike-1').setOrigin(0,1)
        this.groundContainer.add(spike1bis);

        let z12=this.add.image(1820,580,'z12').setOrigin(0,1)
        this.groundContainer.add(z12);
        fellentree1.scale=0.8

        let spike1tis=this.add.image(1820,540,'g-spike-1').setOrigin(0,1)
        this.groundContainer.add(spike1tis);

        let z4=this.add.image(2035,400,'z4').setOrigin(0,1)
        this.groundContainer.add(z4);
        z4.scale=0.8

        let z6=this.add.image(580,260,'z6').setOrigin(0,1)
        this.groundContainer.add(z6);
        z6.scale=0.36
        z6.angle=6



        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(300,335, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree1);
        tree1.setScale(0.8)

        let tree2=this.add.image(50,335, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2); // deuxième arbre foreground de gauche
        tree2.angle=-1;
        tree2.flipX=true;
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(0,325, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,325, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(300,325, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,350,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,350,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);

        this.idle4 = this.add.sprite(1200, 0, 'boy').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'Idle2',
            frames: this.getFrames("boy2-",10),
            frameRate: 12,
            repeat: -1
        });
        this.idle4.play('Idle2');

        this.idle = this.add.sprite(525, -25, 'Layer-1').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'Idle',
            frames: this.getFrames("Layer-",10),
            frameRate: 12,
            repeat: -1
        });
        this.idle.play('Idle');
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm-1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm-1'},
                {key:'filterFilm-2'},
                {key:'filterFilm-3'}
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        this.filterBloody = this.add.sprite(0, 0, 'filterBloody-1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'blood',
            frames: [
                {key:'filterBloody-1'},
                {key:'filterBloody-2'},
                {key:'filterBloody-3'}
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterBloody.play('blood');

        this.filterRain = this.add.sprite(0, 0, 'filterRain-1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'filterRain-1'},
                {key:'filterRain-2'},
                {key:'filterRain-3'}
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterRain.play('rain');



        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA


        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 1550, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.idle4.scrollFactorX=2;
        this.idle3.scrollFactorX=2;
        this.idle2.scrollFactorX=2;
        this.idle.scrollFactorX=2;
        this.filterFilm.scrollFactorX=0;
        this.filterBloody.scrollFactorX=0;
        this.filterRain.scrollFactorX=0;
        //this.bg2Container.scrollFactorX=0.2;
        //this.bg1Container.scrollFactorX=0.4;
        //this.groundContainer.scrollFactorX=1;
        this.bg2Container.scrollFactorX=0.5;
        this.bg1Container.scrollFactorX=1;
        this.groundContainer.scrollFactorX=2;
    }
    /**
     * Renvoie un tableau d'images
     * @param prefix
     * @param length
     * @returns {*[]}
     */
    getFrames(prefix,length)
    {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-5;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
        this.filterBloody.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
