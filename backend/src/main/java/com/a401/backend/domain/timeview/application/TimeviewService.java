package com.a401.backend.domain.timeview.application;

import com.a401.backend.domain.member.domain.Member;
import com.a401.backend.domain.timeview.dto.response.TimeviewResponseDto;

import java.time.LocalDate;
import java.util.List;

public interface TimeviewService {
    TimeviewResponseDto date(Member member, LocalDate date);
    TimeviewResponseDto today(Member member, LocalDate date);
    TimeviewResponseDto month(Member member, String date);
    TimeviewResponseDto year(Member member, String date);
    List<TimeviewResponseDto> days(Member member, String start, String end);
}
