package com.example.groupware.service.board;

import com.example.groupware.entity.board.BoardMasterVO;
import com.example.groupware.repository.board.BoardRepository;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<BoardMasterVO> findAll(){
        return boardRepository.findAll();
    }

    public BoardMasterVO findByBoardId(int id){
        BoardMasterVO resultData = boardRepository.findByBoardId(id);

        int count = resultData.getBoardCount() + 1;
        int result = boardRepository.updateBoardId(id, count);

        if(result >0){
            resultData.setBoardCount(count);
        }
        return resultData;
    }

    public BoardMasterVO insertBoard(BoardMasterVO vo){
        return boardRepository.saveAndFlush(vo);
    }

    public int updateBoard(BoardMasterVO vo){
//        return boardRepository.updateBoard(vo);
        return 0;
    }
    public int deleteBoard(int id){
//        return boardRepository.deleteBoard(id);
        return 0;
    }
}
