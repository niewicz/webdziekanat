class AddStIndexToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :st_index, :string
  end
end
