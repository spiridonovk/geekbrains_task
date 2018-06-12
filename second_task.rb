string= ARGV[0]
num= ARGV[1].to_i
result_string = []

string.each_char do |char|
if ("a".."z").include? (char.downcase)
num.times {char=char.next}
end
result_string.push(char)
end
puts result_string.join
