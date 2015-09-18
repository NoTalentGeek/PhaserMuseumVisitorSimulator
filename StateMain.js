stateMain = {

    create              : function(){

        //PROTOTYPE.
        var systemEdit  = new SystemEdit();
        /*
        console.log(systemEdit.nameTagArray);
        systemEdit.nameTagArray = systemEdit.nameTagArray.filter(function(obj){
            return obj.nameFull !== 'Brave';
        });
        console.log(systemEdit.nameTagArray);
        */
        var systemRoom  = new SystemRoom(systemEdit);
        systemRoom.RoomSystemAdd(new ObjectRoom(systemRoom, new ObjectName('Room Test'       , 'ROM_TES')));
        systemRoom.RoomSystemAdd(new ObjectRoom(systemRoom, new ObjectName('Room Antartica'  , 'ROM_ANT')));
        systemRoom.RoomSystemAdd(new ObjectRoom(systemRoom, new ObjectName('Room Aaa'        , 'ROM_AAA')));

        //Now we can add the room more dynamically.
        console.log('ALL ROOM NAME IN SYSTEM EDIT');
        for(var i = 0; i < systemEdit.nameRoomArray.length; i ++){
            console.log(systemEdit.nameRoomArray[i].nameAlt);
        }
        console.log('ALL ROOM NAME IN STATE');
        for(var i = 0; i < systemRoom.roomArray.length; i ++){
            console.log(systemRoom.roomArray[i].roomNameAlt);
        }
        systemRoom.RoomSystemRemove('ROM_ASI');
        console.log('ALL ROOM NAME IN SYSTEM EDIT');
        for(var i = 0; i < systemEdit.nameRoomArray.length; i ++){
            console.log(systemEdit.nameRoomArray[i].nameAlt);
        }
        console.log('ALL ROOM NAME IN STATE');
        for(var i = 0; i < systemRoom.roomArray.length; i ++){
            console.log(systemRoom.roomArray[i].roomNameAlt);
        }



        /*
        for(var i = 0; i < systemEdit.nameExhibitionArray.nameTagArray.length; i ++) {

            var obj = systemEdit.nameExhibitionArray.nameTagArray[i];
            if(listToDelete.indexOf(obj.nameFull) !== -1) { systemEdit.nameExhibitionArray.nameTagArray.splice(i, 1); }

        }
        */

        /*
        game.stage.backgroundColor  = 0x45283C;

        this.exhibitionMax          = 16;

        this.objectPlayerArray      = new Array();
        this.isAIArray              = new Array();

        for(var i = 0; i < 18; i ++){

            var name                                    = 'NONAME';
            var  objectPlayer                           = new ObjectPlayer (5, 5 + (32*i) , 384 , 16, name);
                 objectPlayer.exhibitionCurrent         = Math.floor((Math.random()*this.exhibitionMax) + 0);
                 objectPlayer.exhibitionTime            = 0;
                 objectPlayer.exhibitionVisited.push    (objectPlayer.exhibitionCurrent);
            this.ObjectPlayerLabel                      (i, objectPlayer);
            this.objectPlayerArray.push                 (objectPlayer);

        }

        this.systemManagerName                  = new SystemManagerName();
        
        this.objectPanelRoomArray               = new Array();
        this.objectPanelRoom1                   = new ObjectPanelRoom (394      , 5      , this.systemManagerName.AddName(0, this.systemManagerName.nameRoomArray) , this.systemManagerName.nameExhibitionAfrikanArray      , 'ImagePanel1' , 'ImagePanel2' , 'ImagePanel3' );
        this.objectPanelRoom2                   = new ObjectPanelRoom (394 + 316, 5      , this.systemManagerName.AddName(1, this.systemManagerName.nameRoomArray) , this.systemManagerName.nameExhibitionAmericanArray     , 'ImagePanel4' , 'ImagePanel5' , 'ImagePanel6' );
        this.objectPanelRoom3                   = new ObjectPanelRoom (394      , 5 + 288, this.systemManagerName.AddName(2, this.systemManagerName.nameRoomArray) , this.systemManagerName.nameExhibitionAsianArray        , 'ImagePanel7' , 'ImagePanel8' , 'ImagePanel9' );
        this.objectPanelRoom4                   = new ObjectPanelRoom (394 + 316, 5 + 288, this.systemManagerName.AddName(3, this.systemManagerName.nameRoomArray) , this.systemManagerName.nameExhibitionEuropeanArray     , 'ImagePanel10', 'ImagePanel11', 'ImagePanel12');
        this.objectPanelRoomArray.push          (this.objectPanelRoom1);
        this.objectPanelRoomArray.push          (this.objectPanelRoom2);
        this.objectPanelRoomArray.push          (this.objectPanelRoom3);
        this.objectPanelRoomArray.push          (this.objectPanelRoom4);
        */

    },

    update              : function(){

        /*
        this.objectPanelRoom1.Update(1, this.objectPlayerArray);
        this.objectPanelRoom2.Update(2, this.objectPlayerArray);
        this.objectPanelRoom3.Update(3, this.objectPlayerArray);
        this.objectPanelRoom4.Update(4, this.objectPlayerArray);

        for(var i = 0; i < 18; i ++){

            this.objectPlayerArray[i].exhibitionTime                = (this.objectPlayerArray[i].exhibitionTime + (game.time.elapsed/1000));

            if(this.objectPlayerArray[i].AutomaticChangeExhibition()){

                if          (this.objectPlayerArray[i].exhibitionCurrent  <= 3   ){
                    if      ((this.objectPlayerArray[i].exhibitionCurrent + 1)%4 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom1.panelTags4Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%3 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom1.panelTags3Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%2 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom1.panelTags2Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%1 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom1.panelTags1Array); }
                }
                else if     (this.objectPlayerArray[i].exhibitionCurrent  <= 7   ){
                    if      ((this.objectPlayerArray[i].exhibitionCurrent + 1)%4 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom2.panelTags4Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%3 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom2.panelTags3Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%2 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom2.panelTags2Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%1 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom2.panelTags1Array); }
                }
                else if     (this.objectPlayerArray[i].exhibitionCurrent  <= 11  ){
                    if      ((this.objectPlayerArray[i].exhibitionCurrent + 1)%4 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom3.panelTags4Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%3 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom3.panelTags3Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%2 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom3.panelTags2Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%1 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom3.panelTags1Array); }
                }
                else if     (this.objectPlayerArray[i].exhibitionCurrent  <= 15  ){
                    if      ((this.objectPlayerArray[i].exhibitionCurrent + 1)%4 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom4.panelTags4Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%3 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom4.panelTags3Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%2 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom4.panelTags2Array); }
                    else if ((this.objectPlayerArray[i].exhibitionCurrent + 1)%1 == 0){ this.objectPlayerArray[i].AddTagsCount(this.objectPanelRoom4.panelTags1Array); }
                }

            }

            this.objectPlayerArray[i].DetermineTargetExhibition     (this.objectPanelRoomArray);
            this.objectPlayerArray[i].Update                        (0, this.exhibitionMax);

            this.ObjectPlayerLabel                                  (i, this.objectPlayerArray[i]);

            if(!this.objectPlayerArray[i].player.isAI){

                if(this.isAIArray.length < 2){
                    if     (this.isAIArray.length == 0){ this.isAIArray.push(i);                               }
                    else if(this.isAIArray.length == 1){ if(this.isAIArray[0] != i){ this.isAIArray.push(i); } }
                }

            }

        }

        //This code is for change everything to true when there is at least one player controlled by the user.
        if(this.isAIArray.length == 2){
            this.objectPlayerArray[this.isAIArray[1]].player.isAI = false;
            for(var i = 0; i < 18; i ++){
                if(i != this.isAIArray[1]){ this.objectPlayerArray[i].player.isAI = true; }
            }
            this.isAIArray.length = 0;
        }
        */

    },

    /*
    ObjectPlayerLabel   : function(_index, _objectPlayer){

        var name                                    = 'NONAME';

        var isAITemporary                           = _objectPlayer.player.isAI;
            isAITemporary                           = (isAITemporary) ? 'TRU' : 'FAL';

        var exhibitionCurrentTemporary              = _objectPlayer.exhibitionCurrent;
        if     (exhibitionCurrentTemporary < 10  )  { exhibitionCurrentTemporary     = '00' + exhibitionCurrentTemporary; }
        else if(exhibitionCurrentTemporary < 100 )  { exhibitionCurrentTemporary     = '0'  + exhibitionCurrentTemporary; }
        else if(exhibitionCurrentTemporary < 1000)  { exhibitionCurrentTemporary     =        exhibitionCurrentTemporary; }

        var exhibitionTimeTemporary                 = _objectPlayer.exhibitionTime;

        var exhibitionTagsCollectionBest            =  _objectPlayer.tagsCollectionBest;
        var exhibitionTagsCollectionBestString      = (_objectPlayer.tagsCollectionBest.length > 0) ? '' : 'XXX XXX XXX';
        for(var i = 0; i < _objectPlayer.tagsCollectionBest.length; i ++){
            if(i == _objectPlayer.tagsCollectionBest.length - 1){ exhibitionTagsCollectionBestString      = exhibitionTagsCollectionBestString + this.systemManagerName.tagArray[_objectPlayer.tagsCollectionBest[i]]; }
            else{ exhibitionTagsCollectionBestString = exhibitionTagsCollectionBestString + this.systemManagerName.tagArray[_objectPlayer.tagsCollectionBest[i]] + ' '; }
        }

        var isEndTemporary                          =  _objectPlayer.isEnd;
            isEndTemporary                          = (_objectPlayer.isEnd) ? 'TRU' : 'FAL';

        if     (_index < 10  ){ name     = 'PLAYER00' + _index + ' || ' + isAITemporary + ' || ' + exhibitionCurrentTemporary + ' || ' + Math.round(exhibitionTimeTemporary) + ' || ' + exhibitionTagsCollectionBestString + ' || ' + isEndTemporary; }
        else if(_index < 100 ){ name     = 'PLAYER0'  + _index + ' || ' + isAITemporary + ' || ' + exhibitionCurrentTemporary + ' || ' + Math.round(exhibitionTimeTemporary) + ' || ' + exhibitionTagsCollectionBestString + ' || ' + isEndTemporary; }
        else if(_index < 1000){ name     = 'PLAYER'   + _index + ' || ' + isAITemporary + ' || ' + exhibitionCurrentTemporary + ' || ' + Math.round(exhibitionTimeTemporary) + ' || ' + exhibitionTagsCollectionBestString + ' || ' + isEndTemporary; }
        _objectPlayer.player.label.text  = name;

    }
    */
};