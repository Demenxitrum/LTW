
const userAnswers = [];

function startExam() {
    const infoPage = document.getElementById("infoPage");
    const examPage = document.getElementById("examPage");
    const questionContainer = document.getElementById("questionContainer");

    // Lấy thông tin người dùng
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const studentID = document.getElementById("studentID").value;
    const classInfo = document.getElementById("class").value;

    // Ẩn trang nhập thông tin và hiển thị trang làm bài
    infoPage.style.display = "none";
    examPage.style.display = "block";

    // Hiển thị câu hỏi
    for (let i = 0; i < 40; i++) {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>Câu hỏi ${i + 1}</p>`;
        if (i < 10) {
            // Nhóm 1: Lựa chọn đúng/sai
            questionDiv.innerHTML += `<input type="radio" name="group1_question${i + 1}" value="true"> Đúng
                                      <input type="radio" name="group1_question${i + 1}" value="false"> Sai`;
        } else if (i < 20) {
            // Nhóm 2: Chọn 1 trong 4 đáp án
            questionDiv.innerHTML += `<select name="group2_question${i + 1}">
                                          <option value="A">Đáp án A</option>
                                          <option value="B">Đáp án B</option>
                                          <option value="C">Đáp án C</option>
                                          <option value="D">Đáp án D</option>
                                      </select>`;
        } else if (i < 30) {
            // Nhóm 3: Chọn nhiều đáp án trong
            questionDiv.innerHTML += `<input type="checkbox" name="group3_question${i + 1}_optionA" value="A"> Đáp án A
                                      <input type="checkbox" name="group3_question${i + 1}_optionB" value="B"> Đáp án B
                                      <input type="checkbox" name="group3_question${i + 1}_optionC" value="C"> Đáp án C
                                      <input type="checkbox" name="group3_question${i + 1}_optionD" value="D"> Đáp án D`;
        } else {
            // Nhóm 4: Trả lời tự luận
            questionDiv.innerHTML += `<textarea name="group4_question${i + 1}" rows="4" cols="50"></textarea>`;
        }

        // Tùy thuộc vào nhóm câu hỏi, thêm các lựa chọn trả lời
        // (Bạn có thể sử dụng các thành phần HTML như input, select, textarea để thể hiện các loại câu hỏi khác nhau)

        questionContainer.appendChild(questionDiv);
    }
}

function showResult() {
    const examPage = document.getElementById("examPage");
    const resultPage = document.getElementById("resultPage");
    const resultContainer = document.getElementById("resultContainer");

    // Ẩn trang làm bài và hiển thị trang kết quả
    examPage.style.display = "none";
    resultPage.style.display = "block";

    // Lấy điểm và hiển thị kết quả
    let totalScore = 0;

    for (let i = 0; i < userAnswers.length; i++) {
        // Tính điểm tùy thuộc vào logic kiểm tra đáp án
        // (Bạn cần xử lý logic kiểm tra đáp án dựa trên loại câu hỏi)
        totalScore += calculateScore(userAnswers[i]);
    }

    // Hiển thị điểm và kết quả
    resultContainer.innerHTML = `<h2>Điểm bài làm của bạn: ${totalScore}</h2>`;

    for (let i = 0; i < userAnswers.length; i++) {
        resultContainer.innerHTML += `<p>Câu hỏi ${userAnswers[i].questionIndex + 1}: ${userAnswers[i].answer}</p>`;
        // Thêm logic hiển thị đáp án đúng và lời giải thích (nếu cần)
    }
}

function calculateScore(answer) {
    // Thêm logic tính điểm tùy thuộc vào đáp án và loại câu hỏi
    // Trả về điểm số cho câu hỏi này
    return 1; // Mặc định trả về 1 điểm, bạn cần điều chỉnh theo yêu cầu cụ thể của bạn
}
